import { Dispatch } from "react"
import { ThunkAction } from "redux-thunk"
import { usersAPI } from "../api/api"
import { userType } from "../types/types"
import { appStateType } from "./redux-store"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
  users: [] as Array<userType>,
  pageSize: 5,
  totalUsersCount: 21,
  currentPage: 1,
  isFetching: false,
  followinInProgress: [] as Array<number> // array of users ids
}

type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsType): initialStateType => {

  switch (action.type) {
    case FOLLOW:

      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? { ...u, followed: true } : u)
      }

    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
      }
    }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
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

type ActionsType = followSuccessActionType | unfollowSuccessActionType | setUsersActionType | setCurrentPageActionType
  | setTotalUsersCountActionType | toggleIsFetchingActionType | toggleIsFollowingProgressActionType

type followSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}
export const followSuccess = (userId: number): followSuccessActionType => ({ type: FOLLOW, userId })
type unfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}
export const unfollowSuccess = (userId: number): unfollowSuccessActionType => ({ type: UNFOLLOW, userId })
type setUsersActionType = {
  type: typeof SET_USERS
  users: Array<userType>
}
export const setUsers = (users: Array<userType>): setUsersActionType => ({ type: SET_USERS, users })
type setCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage })
type setTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  count: number
}
export const setTotalUsersCount = (totalCount: number): setTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, count: totalCount })
type toggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({ type: TOGGLE_IS_FETCHING, isFetching })
type toggleIsFollowingProgressActionType = {
  type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleIsFollowingProgress = (isFetching: boolean, userId: number): toggleIsFollowingProgressActionType => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

type thunkType = ThunkAction<Promise<void>, appStateType, unknown, ActionsType>


export const getUsers = (currentPage: number, pageSize: number): thunkType =>
  async (dispatch, getState) => {

    dispatch(toggleIsFetching(true))

    let data = await usersAPI.getUsers(currentPage, pageSize)

    dispatch(toggleIsFetching(false))
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))

  }

export const _followUnfollowFlow = async (userId: number,
  dispatch: Dispatch<ActionsType>,
  apiMethod: any,
  actionCreator: (userId: number) => followSuccessActionType | unfollowSuccessActionType) => {

  dispatch(toggleIsFollowingProgress(true, userId))

  let response = await apiMethod(userId)
  if (response.data.resultCode == 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleIsFollowingProgress(false, userId))
}



export const follow = (userId: number): thunkType => async (dispatch) => {
  let apiMethod = usersAPI.follow.bind(usersAPI)
  let actionCreator = followSuccess

  _followUnfollowFlow(userId, dispatch, apiMethod, actionCreator)
}


export const unfollow = (userId: number): thunkType => async (dispatch) => {
  let apiMethod = usersAPI.unfollow.bind(usersAPI)
  let actionCreator = unfollowSuccess

  _followUnfollowFlow(userId, dispatch, apiMethod, actionCreator)
}

// before refactoring
// export const follow/unfollow = async (userId) => dispatch => {

//   dispatch(toggleIsFollowingProgress(true, userId))
//   let response = await usersAPI.follow(userId)

//   if (response.data.resultCode == 0) {
//     dispatch(followSuccess(userId))
//   }
//   dispatch(toggleIsFollowingProgress(false, userId))
// }


export default usersReducer