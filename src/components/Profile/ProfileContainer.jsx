import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile, showProfileThunkCreator, updateUserStatus, getUserStatus } from '../../redux/Profile_reducer'
import { Redirect, withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';
import { withAuthRedirectComponent } from '../../hoc/withAuthRedirect'
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      // if (!userId) {
      //   this.props.history.push('/login')
      // }
    }
    this.props.showProfileThunkCreator(userId)
    this.props.getUserStatus(userId)
    // profileAPI.showProfile(userId)
    //   .then(data => {
    //     this.props.setUserProfile(data)
    //   })
  }

  render() {
    return <div>
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} />
    </div>
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})


export default compose(
  connect(mapStateToProps, { showProfileThunkCreator, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirectComponent
)(ProfileContainer)