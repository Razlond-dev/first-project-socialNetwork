import React from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css'
import ProfileStatusHook from './ProfileStatusHook';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  return <div>
    {/* <div>
      <img src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg" alt="" />
    </div> */}

    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large} alt="avatar" />
      <ProfileStatusHook status={props.status} updateUserStatus={props.updateUserStatus} />
    </div>

  </div>
}






export default ProfileInfo