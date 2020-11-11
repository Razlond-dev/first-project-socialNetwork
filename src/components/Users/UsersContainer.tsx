import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, getUsers, FilterType } from '../../redux/Users_reducer'
import Users from './Users'
import Preloader from '../common/preloader/preloader'
import { compose } from 'redux'
import { getUsersSel, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/Users_selectors'
import { userType } from '../../types/types'
import { appStateType } from '../../redux/redux-store'
import { getUsersFilter } from './../../redux/Users_selectors';




class UsersContainer extends React.Component<propsType> {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize, this.props.filter)
  }

  onPageChanged = (pageNumber: { selected: number }, ) => {
    this.props.getUsers((pageNumber.selected + 1), this.props.pageSize, this.props.filter)
  }

  onFilterChanged = (filter: FilterType) => {
    const { pageSize } = this.props
    this.props.getUsers(1, pageSize, filter)
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
        onFilterChanged={this.onFilterChanged}
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
    followingInProgress: getFollowingInProgress(state),
    filter: getUsersFilter(state)
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
  filter: FilterType
}

type mapDispatchPropsType = {
  getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
  follow: (userId: number) => void
  unfollow: (userId: number) => void
}

type propsType = mapStatePropsType & mapDispatchPropsType
