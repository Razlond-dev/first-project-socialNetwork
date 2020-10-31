import React, { useEffect, useState } from 'react';
import { toggleIsFetching } from '../../../redux/Users_reducer';
import Preloader from '../../common/preloader/preloader';
import s from './ProfileInfo.module.css'

const ProfileStatusHook = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deActivateEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }


  return <>
    { editMode
      ? <div>
        <input onChange={onStatusChange} onBlur={deActivateEditMode} type="text" value={status} autoFocus={true} />
      </div>
      : <div>
        <span onClick={activateEditMode}><b>Status: </b>{props.status || 'status is empty'}</span>
      </div>
    }

  </>
}






export default ProfileStatusHook