import React, { useState } from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css'
import ProfileStatusHook from './ProfileStatusHook';
import userPhoto from '../../../assets/images/userPhoto.jpg'
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(
      () => {
        setEditMode(false)
      })

  }

  return <div>
    <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt="avatar" />
      {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

      {
        editMode
          ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} {...props} />
          : <ProfileData profile={props.profile} goToEditMode={() => { setEditMode(true) }} isOwner={props.isOwner} />
      }

      <ProfileStatusHook status={props.status} updateUserStatus={props.updateUserStatus} />
    </div>

  </div>
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
    <div>
      <b>Looking for a job:</b> {profile.lookingForAJob ? 'Yes' : 'No'}
    </div>
    {profile.lookingForAJob && profile.lookingForAJobDescription &&
      <div>
        <b>My proffecional skills:</b> {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>fullName:</b> {profile.fullName}
    </div>
    <div>
      <b>about me:</b> {profile.aboutMe}
    </div>
    <div>
      <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div className={s.contact}><b>{contactTitle}:</b>{contactValue}</div>
}




export default ProfileInfo