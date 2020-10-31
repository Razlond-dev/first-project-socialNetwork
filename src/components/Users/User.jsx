import Axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/userPhoto.jpg'
import { NavLink } from 'react-router-dom'
import { usersAPI } from '../../api/api'
import Paginatior from '../common/Paginator/Paginator'


const User = ({ user, ...props }) => {

  return <div>
    <span>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img className={s.userPhoto} src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" />
        </NavLink>
      </div>
      <div>
        {user.followed
          ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.unfollow(user.id) }}>unfollow</button>
          : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.follow(user.id) }}>follow</button>}
      </div>
    </span>
    <span>
      <span>
        <div>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{'user.location.city'}</div>
        <div>{'user.location.country'}</div>
      </span>
    </span>
  </div>
}








export default User

