import React from 'react'
import { connect, useSelector } from 'react-redux'
import { follow, unfollow, getUsers, FilterType } from '../../redux/Users_reducer'
import Users from './Users'
import Preloader from '../common/preloader/preloader'
import { compose } from 'redux'
import { getUsersSel, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/Users_selectors'
import { userType } from '../../types/types'
import { appStateType } from '../../redux/redux-store'
import { getUsersFilter } from './../../redux/Users_selectors';


type UserPagePropsType = {
  pageTitle: string
}
export const UsersPage: React.FC<UserPagePropsType> = (props) => {

  const isFetching = useSelector(getIsFetching)

  return <>
      {isFetching
        ? <Preloader />
        : null}
      <Users />
    </>
} 
