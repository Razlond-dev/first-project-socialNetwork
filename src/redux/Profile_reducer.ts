import { Action } from "redux"
import { ActionTypes, FormAction, stopSubmit } from "redux-form"
import { profileAPI } from "../api/profileAPI"
import { PhotosType, postType, profileType, contactsType } from "../types/types"
import { BaseThunkType, inferActionsTypes } from "./redux-store"

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


const profileReducer = (state = initialState, action: any): initialStateType => {


  switch (action.type) {
    case 'ADD-POST':

      return {
        ...state,
        posts: [...state.posts, { id: 5, message: action.newPost, likesCount: 0 }],
        newPostText: ''
      }

    case 'UPDATE-NEW-POST-TEXT': {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case 'SET_USER_PROFILE': {
      return {
        ...state,
        profile: action.profile
      }
    }
    case 'SET_USER_STATUS': {
      return {
        ...state,
        status: action.status
      }
    }
    case 'DELETE_POST': {
      return {
        ...state,
        posts: [...state.posts.filter(p => p.id != action.id)]
      }
    }
    case 'SAVE_PHOTO_SUCCESS': {
      return { ...state, profile: { ...state.profile, photos: action.photos } as profileType }

    }
    default:
      return state
  }
}

export const actions = {
  addPostCreator: (newPost: string) => ({ type: 'ADD-POST', newPost } as const),
  setUserProfile: (profile: profileType) => ({ type: 'SET_USER_PROFILE', profile } as const),
  setUserStatus: (status: string) => ({ type: 'SET_USER_STATUS', status } as const),
  deletePost: (id: number) => ({ type: 'DELETE_POST', id } as const),
  savePhotoSuccess: (photos: PhotosType) => ({ type: 'SAVE_PHOTO_SUCCESS', photos } as const),
  updateNewPostTextCreator: (text: string) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text } as const)
}

export const showProfileThunkCreator = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.showProfile(userId)
  dispatch(actions.setUserProfile(data))
}

export const getUserStatus = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)

  dispatch(actions.setUserStatus(data))

}

export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
      dispatch(actions.setUserStatus(status))
    }
  } catch (error) {
    console.log(error)
  }

}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  let data = await profileAPI.savePhoto(file)
  if (data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos))
  }
}

export const saveProfile = (profile: profileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId
  let data = await profileAPI.saveProfile(profile)
  if (data.resultCode === 0) {
    if (userId != null) {
      dispatch(showProfileThunkCreator(userId))
    } else {
      throw new Error("userId can't be null");
    }
  } else {
    dispatch(stopSubmit('editProfile', ({ _error: data.messages[0] })))
    return Promise.reject(data.messages[0])
  }
}


export default profileReducer

// types
export type initialStateType = typeof initialState
type ActionsType = inferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>