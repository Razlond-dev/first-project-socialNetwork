import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';



const Profile = (props) => {
  return <div>
    <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
    <MyPostsContainer />
  </div>
}

export default Profile