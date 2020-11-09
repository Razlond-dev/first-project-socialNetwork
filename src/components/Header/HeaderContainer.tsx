import { render } from '@testing-library/react';
import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header, { DispatchPropsType, MapPropsType } from './Header';
import s from './Header.module.css'
import { authMeThunkCreator, logoutThunkCreator } from '../../redux/Auth_reducer'
import { appStateType } from '../../redux/redux-store';

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state: appStateType) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect<MapPropsType, DispatchPropsType, {}, appStateType>(mapStateToProps, { logoutThunkCreator })(HeaderContainer) 