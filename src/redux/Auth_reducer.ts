import { stopSubmit } from "redux-form"
import { authAPI, ResultCodeEnum, ResultCodeForCaptchaEnum, securityAPI } from "../api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

// export type initialStateType2 = {
//   userId: number | null,
//   email: string | null,
//   login: string | null,
//   isAuth: boolean,
//   captchaUrl: string | null
// }

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null
}

export type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data
      }
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        captchaUrl: action.captchaUrl
      }
    default:
      return state
  }
}

type setAuthUserDataActionDataType = {
  email: string | null
  userId: number | null
  login: string | null
  isAuth: boolean
}

type setAuthUserDataActionType = {
  type: typeof SET_USER_DATA,
  data: setAuthUserDataActionDataType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => (
  { type: SET_USER_DATA, data: { email, userId, login, isAuth } })

type getCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS,
  captchaUrl: string
}

export const getCaptchaUrlSuccess = (url: string): getCaptchaUrlSuccessActionType => ({ type: GET_CAPTCHA_URL_SUCCESS, captchaUrl: url })

export const authMeThunkCreator = () => async (dispatch: any) => {

  let data = await authAPI.authMe()

  if (data.resultCode === ResultCodeEnum.Success) {
    let { id, login, email } = data.data
    dispatch(setAuthUserData(id, login, email, true))
  }
}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {

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


export const logoutThunkCreator = () => async (dispatch: any) => {
  let response = await authAPI.logout()

  if (response.data.resultCode === ResultCodeEnum.Success) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}

export const getCaptchaUrl = () => async (dispatch: any) => {

  const data = await securityAPI.getCaptchaUrl()
  const captchaUrl = data.url
  dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export default authReducer