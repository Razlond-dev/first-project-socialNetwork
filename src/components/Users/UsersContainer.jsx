import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress, getUsers } from '../../redux/Users_reducer'
import Users from './Users'
import Axios from 'axios'
import Preloader from '../common/preloader/preloader'
import { usersAPI } from '../../api/api'
import { compose } from 'redux'
import { withAuthRedirectComponent } from '../../hoc/withAuthRedirect'
import { getUsersSel, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/Users_selectors'


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
    // this.props.toggleIsFetching(true)
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    //   .then(data => {
    //     this.props.toggleIsFetching(false)
    //     this.props.setUsers(data.items)
    //     this.props.setTotalUsersCount(data.totalCount)
    //   })
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber)
    // this.props.toggleIsFetching(true)
    // usersAPI.getUsers(pageNumber, this.props.pageSize)
    //   .then(data => {
    //     this.props.toggleIsFetching(false)
    //     this.props.setUsers(data.items)
    //   })
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
        followinInProgress={this.props.followinInProgress} />
    </>
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followinInProgress: state.usersPage.followinInProgress
//   }
// }

let mapStateToProps = (state) => {
  return {
    users: getUsersSel(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followinInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers
  }),
  // withAuthRedirectComponent
)(UsersContainer)

