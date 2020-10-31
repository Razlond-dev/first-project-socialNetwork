import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 21,
  currentPage: 1,
  isFetching: false,
  followinInProgress: []
}

const usersReducer = (state = initialState, action) => {

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

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })



export const getUsers = (currentPage, pageSize) => async (dispatch) => {

  dispatch(toggleIsFetching(true))

  let data = await usersAPI.getUsers(currentPage, pageSize)

  dispatch(toggleIsFetching(false))
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))

}

export const followUnfollowFlow = async (userId, dispatch, apiMethod, actionCreator) => {

  dispatch(toggleIsFollowingProgress(true, userId))

  let response = await apiMethod(userId)
  if (response.data.resultCode == 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleIsFollowingProgress(false, userId))
}



export const follow = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.follow.bind(usersAPI)
  let actionCreator = followSuccess

  followUnfollowFlow(userId, dispatch, apiMethod, actionCreator)
}


export const unfollow = (userId) => (dispatch) => {
  let apiMethod = usersAPI.unfollow.bind(usersAPI)
  let actionCreator = unfollowSuccess

  followUnfollowFlow(userId, dispatch, apiMethod, actionCreator)
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