import Axios from 'axios'
import React from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/userPhoto.png'
import { NavLink } from 'react-router-dom'
import { usersAPI } from "../../api/usersAPI"
import Paginatior from '../common/Paginator/Paginator'
import { userType } from '../../types/types'

type PropsType = {
  user: userType
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

const User: React.FC<PropsType> = ({ user, ...props }) => {

  return <div style={{ width: 400, display: 'flex', justifyContent: "space-between", }}>
    <div style={{ textAlign: "center" }}>
      <div style={{ padding: 10 }}>
        <NavLink to={'/profile/' + user.id}>
          <img style={{ width: 130, height: 130, borderRadius: 65 }} src={user.photos.small != null ? user.photos.small : userPhoto} alt="avatar" />
        </NavLink>
      </div>
      <div>
        {user.followed
          ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.unfollow(user.id) }}>unfollow</button>
          : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => { props.follow(user.id) }}>follow</button>}
      </div>
    </div>
    <div style={{ width: 200, textAlign: 'start', display: "flex", justifyContent: "start", marginTop: 40, color: "white" }}>
      <span>
        <div>Name: {user.name}</div>
        {
          user.status ? <div>Status: {user.status}</div> : <div>User status is empty</div>
        }
      </span>
      <span>
        {/* <div>{'user.location.city'}</div>
        <div>{'user.location.country'}</div> */}
      </span>
    </div>
  </div>
}

export default User

