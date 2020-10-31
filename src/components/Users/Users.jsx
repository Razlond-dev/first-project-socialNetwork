import Axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/userPhoto.jpg'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'
import Paginatior from '../common/Paginator/Paginator'
import User from './User'


const Users = (props) => {

  return <div>
    <Paginatior totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} currentPage={props.currentPage} />

    {
      props.users.map(u => <User key={u.id} user={u} followinInProgress={props.followinInProgress} unfollow={props.unfollow} follow={props.follow} />)
    }
  </div>
}








export default Users

