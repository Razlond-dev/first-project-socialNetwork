import React, { ChangeEvent, useState } from 'react';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css'
import ProfileStatusHook from './ProfileStatusHook';
import userPhoto from '../../../assets/images/userPhoto.jpg'
import ProfileDataForm from './ProfileDataForm';
import { profileType } from '../../../types/types';
import { savePhoto } from './../../../redux/Profile_reducer';
import { Input, Button } from 'antd';



const ProfileInfo: React.FC<PropsType> = (props) => {

  let [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData: profileType) => {
    // todo: remove then
    props.saveProfile(formData).then(
      () => {
        setEditMode(false)
      })

  }

  return <div style={{ padding: 50, width: 900 }}>
    <div className={s.descriptionBlock} style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <img style={{ marginBottom: 10 }} src={props.profile.photos.large || userPhoto} className={s.mainPhoto} alt="avatar" />
        {props.isOwner && <input style={{ marginBottom: 20 }} type={'file'} onChange={onMainPhotoSelected} />}
        <ProfileStatusHook status={props.status} updateUserStatus={props.updateUserStatus} />
      </div>


      {
        editMode
          ? <ProfileDataForm initialValues={props.profile} onSubmit={onSubmit} {...props} />
          : <ProfileData profile={props.profile} goToEditMode={() => { setEditMode(true) }} isOwner={props.isOwner} />
      }

    </div>

  </div>
}



const ProfileData: React.FC<ProfileDataPropsType> = ({ profile, isOwner, goToEditMode }) => {
  return <div style={{ fontSize: 16 }}>
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
    {isOwner && <div><Button onClick={goToEditMode}>Edit</Button></div>}
  </div>
}


const Contact: React.FC<ContactsPropsType> = ({ contactTitle, contactValue }) => {
  return <div className={s.contact}><b>{contactTitle}:</b>{contactValue}</div>
}




export default ProfileInfo

// types
type ProfileDataPropsType = {
  profile: profileType
  isOwner: boolean
  goToEditMode: () => void
}
type ContactsPropsType = {
  contactTitle: string
  contactValue: string
}
type PropsType = {
  profile: profileType | null
  status: string
  isOwner: boolean
  savePhoto: (file: File) => void
  saveProfile: (profile: profileType) => Promise<any>
  updateUserStatus: (status: string) => void
}