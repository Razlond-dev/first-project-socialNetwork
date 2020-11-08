import { FormAction, stopSubmit } from "redux-form"
import { ResultCodeEnum, ResultCodeForCaptchaEnum } from "../api/api"
import { securityAPI } from "../api/securityAPI"
import { authAPI } from "../api/authAPI"
import { BaseThunkType, inferActionsTypes } from "./redux-store"


let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null
}

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.data
      }
    case 'GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }
    default:
      return state
  }
}

export const actions = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => (
    { type: 'SET_USER_DATA', data: { email, userId, login, isAuth } } as const),
  getCaptchaUrlSuccess: (url: string) => ({ type: 'GET_CAPTCHA_URL_SUCCESS', captchaUrl: url } as const)
}

export const authMeThunkCreator = (): ThunkType => async (dispatch) => {

  let data = await authAPI.authMe()

  if (data.resultCode === ResultCodeEnum.Success) {
    let { id, login, email } = data.data
    dispatch(actions.setAuthUserData(id, login, email, true))
  }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {

  let data = await authAPI.login(email, password, rememberMe, captcha)

  if (data.resultCode === ResultCodeEnum.Success) {
    dispatch(authMeThunkCreator())
  } else {
    // below must be used '===' but I don't really know why TS always alert an error
    if (data.resultCode >= ResultCodeForCaptchaEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl())
    } else {
      let messages = data.messages.length > 0 ? data.messages[0] : 'Some error'
      dispatch(stopSubmit('login', ({ _error: messages })))
    }
  }
}


export const logoutThunkCreator = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout()

  if (response.data.resultCode === ResultCodeEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {

  const data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer

// types

export type initialStateType = typeof initialState
type ActionsType = inferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>