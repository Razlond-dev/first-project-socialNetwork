import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { profileType } from '../../types/types';

type PropsType = {
  profile: profileType | null
  status: string
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: profileType) => Promise<any>
  updateUserStatus: (status: string) => void
}

const Profile: React.FC<PropsType> = (props) => {
  return <div>
    <ProfileInfo isOwner={props.isOwner} savePhoto={props.savePhoto} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} saveProfile={props.saveProfile} />
    <MyPostsContainer />
  </div>
}

export default Profile