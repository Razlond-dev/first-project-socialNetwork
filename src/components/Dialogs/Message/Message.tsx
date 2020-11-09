import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

type PropsType = {
  message: string
}

const Message: React.FC<PropsType> = (props) => {
  return <div className={s.message}>{props.message}</div>
}

export default Message