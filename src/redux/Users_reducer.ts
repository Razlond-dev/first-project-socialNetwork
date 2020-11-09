import { Dispatch } from "react"
import { ThunkAction } from "redux-thunk"
import { APIResponseType } from "../api/api"
import { usersAPI } from "../api/usersAPI"
import { userType } from "../types/types"
import { appStateType, BaseThunkType, inferActionsTypes } from "./redux-store"

let initialState = {
  users: [] as Array<userType>,
  pageSize: 5,
  totalUsersCount: 21,
  currentPage: 1,
  isFetching: false,
  followinInProgress: [] as Array<number> // array of users ids
}


export const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
    case "FOLLOW":

      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
      }

    case "UNFOLLOW": {
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
      }
    }
    case "SET_USERS": {
      return { ...state, users: action.users }
    }
    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage }
    }
    case "SET_TOTAL_USERS_COUNT": {
      return { ...state, totalUsersCount: action.count }
    }
    case "TOGGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching }
    }
    case "TOGGLE_IS_FOLLOWING_PROGRESS": {
      return {
        ...state,
        followinInProgress: action.isFetching
          ? [...state.followinInProgress, action.userId]
          : state.followinInProgress.filter(id => id != action.userId)
      }
    }
    default:
      return state
  }
}



export const actions = {
  followSuccess: (userId: number) => ({ type: 'FOLLOW', userId } as const),
  unfollowSuccess: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
  setUsers: (users: Array<userType>)=> ({ type: 'SET_USERS', users } as const),
  setCurrentPage: (currentPage: number)=> ({ type: 'SET_CURRENT_PAGE', currentPage } as const),
  setTotalUsersCount: (totalCount: number) => ({ type: 'SET_TOTAL_USERS_COUNT', count: totalCount } as const),
  toggleIsFetching: (isFetching: boolean) => ({ type: 'TOGGLE_IS_FETCHING', isFetching } as const),
  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const)
}





export const getUsers = (currentPage: number, pageSize: number): ThunkType =>
  async (dispatch) => {

    dispatch(actions.toggleIsFetching(true))

    let data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))

  }

export const _followUnfollowFlow = async (userId: number,
  dispatch: Dispatch<ActionsType>,
  apiMethod: (userId: number) => Promise<APIResponseType>,
  actionCreator: (userId: number) => ActionsType) => {

  dispatch(actions.toggleIsFollowingProgress(true, userId))

  let response = await apiMethod(userId)
  if (response.resultCode == 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(actions.toggleIsFollowingProgress(false, userId))
}



export const follow = (userId: number): ThunkType => async (dispatch) => {
  let apiMethod = usersAPI.follow.bind(usersAPI)
  let actionCreator = actions.followSuccess

  await _followUnfollowFlow(userId, dispatch, apiMethod, actionCreator)
}


export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  let apiMethod = usersAPI.unfollow.bind(usersAPI)
  let actionCreator = actions.unfollowSuccess

  await _followUnfollowFlow(userId, dispatch, apiMethod, actionCreator)
}


export default usersReducer

// types
export type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsType>
type ActionsType = inferActionsTypes<typeof actions>
