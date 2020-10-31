import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_USER_DATA = 'auth/SET_USER_DATA'

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:


      return {
        ...state,
        ...action.data
      }

    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { email, userId, login, isAuth } })

export const authMeThunkCreator = () => async (dispatch) => {

  let data = await authAPI.authMe()

  if (data.resultCode === 0) {
    let { id, login, email } = data.data
    dispatch(setAuthUserData(id, login, email, true))
  }
}

export const loginThunkCreator = (email, password, rememberMe) => async (dispatch) => {

  let data = await authAPI.login(email, password, rememberMe)

  if (data.resultCode === 0) {
    dispatch(authMeThunkCreator())
  } else {
    let messages = data.messages.length > 0 ? data.messages[0] : 'Some error'
    dispatch(stopSubmit('login', ({ _error: messages })))
  }
}


export const logoutThunkCreator = () => async (dispatch) => {
  let response = await authAPI.logout()

  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}



export default authReducer