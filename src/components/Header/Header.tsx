import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

export type MapPropsType = {
  isAuth: boolean
  login: string | null
}
export type DispatchPropsType = {
  logoutThunkCreator: () => void

}

const Header: React.FC<MapPropsType & DispatchPropsType> = (props) => {
  return <header className={s.header}>
    <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" alt="logo" />
    <div className={s.loginBlock}>
      {props.isAuth
        ? <div>{props.login} - <button onClick={props.logoutThunkCreator}>Log out</button> </div>
        : <NavLink to='/login'>Login</NavLink>}

    </div>
  </header>

}

export default Header