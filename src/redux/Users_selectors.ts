import React from 'react'
import { appStateType } from './redux-store'

export const getUsersSel = (state: appStateType) => {
  return state.usersPage.users
}

export const getPageSize = (state: appStateType) => {
  return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: appStateType) => {
  return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: appStateType) => {
  return state.usersPage.currentPage
}

export const getIsFetching = (state: appStateType) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: appStateType) => {
  return state.usersPage.followinInProgress
}

export const getUsersFilter = (state: appStateType) => {
  return state.usersPage.filter
}