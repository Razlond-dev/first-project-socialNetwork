import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { profileType } from '../../../types/types';
import s from './ProfileInfo.module.css'
import { Button } from 'antd';

type PropsType = {
  profile?: profileType | null
}

const ProfileDataForm: React.FC<InjectedFormProps<profileType, PropsType> & PropsType> = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <div>
        {props.error
          ? <div className='formSummaryError'> {props.error} </div>
          : null}
        <b>Looking for a job:</b> <Field type="checkbox" name={'lookingForAJob'} component={'input'} />
      </div>
      <div>
        <b>My proffecional skills:</b> <Field type="text" name={'lookingForAJobDescription'} component={'textarea'} />
      </div>
      <div>
        <b>fullName:</b> <Field type="text" name={'fullName'} component={'input'} />
      </div>
      <div>
        <b>about me:</b> <Field type="text" name={'aboutMe'} component={'textarea'} />
      </div>
      <div>
        <b>Contacts:</b> {Object.keys(props.profile!.contacts).map(key => {
          return <div key={key} className={s.contact}>
            <b>{key}:</b> <Field placeholder={key} type="text" name={'contacts.' + key} component={'input'} />
          </div>
        })}
      </div>
      <Button onClick={props.handleSubmit}>Save</Button></div>
  </form >
}




const ProfileDataReduxForm = reduxForm<profileType, PropsType>({ form: 'editProfile' })(ProfileDataForm)


export default ProfileDataReduxForm