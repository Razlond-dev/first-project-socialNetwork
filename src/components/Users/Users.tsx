import React from 'react'
import Paginatior from '../common/Paginator/Paginator'
import User from './User'
import { userType } from '../../types/types'
import { UsersSearchForm } from './UserSearchForm';
import { FilterType } from '../../redux/Users_reducer';


type propsType = {
  totalUsersCount: number
  pageSize: number
  onPageChanged: (pageNumber: {selected: number}) => void
  onFilterChanged: (filter: FilterType) => void
  currentPage: number
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  users: Array<userType>
}

const Users: React.FC<propsType> = (props) => {

  return <div>
    <UsersSearchForm onFilterChanged={props.onFilterChanged} />
    <Paginatior totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} currentPage={props.currentPage} />

    {
      props.users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />)
    }
  </div>
}

export default Users

