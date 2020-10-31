import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
  posts: [
    { id: 1, message: 'Hey, how are you?', likesCount: 9 },
    { id: 2, message: 'You are the best!', likesCount: 240 },
    { id: 3, message: 'Hey, how are you?Good?', likesCount: 1 },
    { id: 4, message: 'Hey, how are you?Bad?', likesCount: 5 },
    { id: 5, message: 'I am good!', likesCount: 20 },
    { id: 6, message: 'Hey, I am new.', likesCount: 10 },
  ],
  newPostText: '',
  profile: null,
  status: 'Empty'
}

const profileReducer = (state = initialState, action) => {


  switch (action.type) {
    case ADD_POST:

      return {
        ...state,
        posts: [...state.posts, { id: 5, message: action.newPost, likesCount: 0 }],
        newPostText: ''
      }

    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: [...state.posts.filter(p => p.id != action.id)]
      }
    }
    default:
      return state
  }
}

export const addPostCreator = (newPost) => ({ type: ADD_POST, newPost })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const deletePost = (id) => ({ type: DELETE_POST, id })


export const updateNewPostTextCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export const showProfileThunkCreator = (userId) => async (dispatch) => {
  let data = await profileAPI.showProfile(userId)
  dispatch(setUserProfile(data))
}

export const getUserStatus = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)

  dispatch(setUserStatus(data))

}

export const updateUserStatus = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status)
  if (data.resultCode === 0) {
    dispatch(setUserStatus(status))
  }
}


export default profileReducer