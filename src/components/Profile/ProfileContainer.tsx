import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile';
import Axios from 'axios';
import { connect} from 'react-redux';
import { showProfileThunkCreator, updateUserStatus, getUserStatus, savePhoto, saveProfile } from '../../redux/Profile_reducer'
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { profileAPI } from "../../api/profileAPI";
import { withAuthRedirectComponent } from '../../hoc/withAuthRedirect'
import { compose } from 'redux';
import { appStateType } from '../../redux/redux-store';
import { profileType } from '../../types/types';


type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  showProfileThunkCreator: (userId: number) => void
   getUserStatus: (userId: number) => void
   updateUserStatus: (status: string) => void
   savePhoto: (file: File) => void
   saveProfile: (profile: profileType) => Promise<any>
}
type PathParamsType = {
  userId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>;

class ProfileContainer extends React.Component<PropsType> {

  refreshProfile() {
    let userId: number | null = +this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
    } 

    if (!userId) {
      console.error('UserId should be in URL params or in state authorizedUserId')
    } else {
      this.props.showProfileThunkCreator(userId)
    this.props.getUserStatus(userId)
    }
    
  }

  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return <div>
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus} isOwner={!this.props.match.params.userId}
        savePhoto={this.props.savePhoto} />
    </div>
  }
}


let mapStateToProps = (state: appStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})


export default compose<React.ComponentType>(
  connect(mapStateToProps, { showProfileThunkCreator, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
  withRouter,
  withAuthRedirectComponent
)(ProfileContainer)