import { stopSubmit } from "redux-form"
import { profileAPI } from "../api/api"
import { photosType, postType, profileType, contactsType } from "../types/types"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'




let initialState = {
  posts: [
    { id: 1, message: 'Hey, how are you?', likesCount: 9 },
    { id: 2, message: 'You are the best!', likesCount: 240 },
    { id: 3, message: 'Hey, how are you?Good?', likesCount: 1 },
    { id: 4, message: 'Hey, how are you?Bad?', likesCount: 5 },
    { id: 5, message: 'I am good!', likesCount: 20 },
    { id: 6, message: 'Hey, I am new.', likesCount: 10 },
  ] as Array<postType>,
  newPostText: '',
  profile: null as profileType | null,
  status: ''
}

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {


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
    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } as profileType }

    }
    default:
      return state
  }
}

type addPostCreatorActionType = {
  type: typeof ADD_POST
  newPost: string
}

export const addPostCreator = (newPost: string): addPostCreatorActionType => ({ type: ADD_POST, newPost })
type setUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: profileType
}
export const setUserProfile = (profile: profileType): setUserProfileActionType => ({ type: SET_USER_PROFILE, profile })
type setUserStatusActionType = {
  type: typeof SET_USER_STATUS
  status: string
}
export const setUserStatus = (status: string): setUserStatusActionType => ({ type: SET_USER_STATUS, status })
type deletePostActionType = {
  type: typeof DELETE_POST
  id: number
}
export const deletePost = (id: number): deletePostActionType => ({ type: DELETE_POST, id })
type savePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: photosType
}
export const savePhotoSuccess = (photos: photosType): savePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos })

type updateNewPostTextCreatorActionType = {
  type: typeof UPDATE_NEW_POST_TEXT
  newText: string
}
export const updateNewPostTextCreator = (text: string) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export const showProfileThunkCreator = (userId: number) => async (dispatch: any) => {
  let data = await profileAPI.showProfile(userId)
  dispatch(setUserProfile(data))
}

export const getUserStatus = (userId: number) => async (dispatch: any) => {
  let data = await profileAPI.getStatus(userId)

  dispatch(setUserStatus(data))

}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
  try {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status))
    }
  } catch (error) {
    console.log(error)
  }

}

export const savePhoto = (file: any) => async (dispatch: any) => {
  let data = await profileAPI.savePhoto(file)
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos))
  }
}

export const saveProfile = (profile: profileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId
  let data = await profileAPI.saveProfile(profile)
  if (data.resultCode === 0) {
    dispatch(showProfileThunkCreator(userId))
  } else {
    dispatch(stopSubmit('editProfile', ({ _error: data.messages[0] })))
    return Promise.reject(data.messages[0])
  }
}


export default profileReducer