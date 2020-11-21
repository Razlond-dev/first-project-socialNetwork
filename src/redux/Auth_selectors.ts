import React from 'react'
import { appStateType } from './redux-store'

export const SelectIsAuth = (state: appStateType) => {
  return state.auth.isAuth
}

export const SelectCurrentUserLogin = (state: appStateType) => {
  return state.auth.login
}