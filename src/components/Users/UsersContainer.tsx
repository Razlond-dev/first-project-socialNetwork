import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, getUsers } from '../../redux/Users_reducer'
import Users from './Users'
import Preloader from '../common/preloader/preloader'
import { compose } from 'redux'
import { getUsersSel, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/Users_selectors'
import { userType } from '../../types/types'
import { appStateType } from '../../redux/redux-store'




class UsersContainer extends React.Component<propsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  render() {

    return <>
      {this.props.isFetching
        ? <Preloader />
        : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followingInProgress={this.props.followingInProgress} />
    </>
  }
}

let mapStateToProps = (state: appStateType): mapStatePropsType => {
  return {
    users: getUsersSel(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect<mapStatePropsType, mapDispatchPropsType, ownPropsType, appStateType>(mapStateToProps, {
    follow,
    unfollow,
    getUsers
  }),
  // withAuthRedirectComponent
  // @ts-ignore
)(UsersContainer)

// types
type ownPropsType = {}

type mapStatePropsType = {
  currentPage: number
  pageSize: number
  totalUsersCount: number
  users: Array<userType>
  isFetching: boolean
  followingInProgress: Array<number>
}

type mapDispatchPropsType = {
  getUsers: (currentPage: number, pageSize: number) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

type propsType = mapStatePropsType & mapDispatchPropsType
