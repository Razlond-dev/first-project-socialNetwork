import { render } from '@testing-library/react';
import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import s from './Header.module.css'
import { authMeThunkCreator, setAuthUserData, logoutThunkCreator } from '../../redux/Auth_reducer'

class HeaderContainer extends React.Component {

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { logoutThunkCreator })(HeaderContainer) 