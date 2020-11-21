import React, { useEffect, useState } from 'react'
import Paginatior from '../common/Paginator/Paginator'
import User from './User'
import { userType } from '../../types/types'
import { UsersSearchForm } from './UserSearchForm';
import { FilterType, getUsers, unfollow, follow } from '../../redux/Users_reducer';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount } from '../../redux/Users_selectors';
import { getUsersFilter, getUsersSel } from './../../redux/Users_selectors';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string'
import { Pagination } from 'antd';


type propsType = {}

type QueryParamsType = {
  term?: string
  page?: string
  friend?: string
}


const Users: React.FC<propsType> = () => {

  const history = useHistory()

  const dispatch = useDispatch()

  const users = useSelector(getUsersSel)
  const totalUsersCount = useSelector(getTotalUsersCount)
  const currentPage = useSelector(getCurrentPage)
  const pageSize = useSelector(getPageSize)
  const filter = useSelector(getUsersFilter)
  const followingInProgress = useSelector(getFollowingInProgress)


  useEffect(() => {

    const parsed = queryString.parse(history.location.search) as QueryParamsType

    let actualPage = currentPage
    let actualFilter = filter
    if (parsed.page) actualPage = Number(parsed.page)
    if (parsed.term) actualFilter = { ...actualFilter, term: parsed.term as string }
    if (parsed.friend) actualFilter = { ...actualFilter, friend: parsed.friend === 'null' ? null : parsed.friend === 'true' ? true : false }
    dispatch(getUsers(actualPage, pageSize, actualFilter))
  }, [])

  // TODO: fix returning class active for first page when filtering
  useEffect(() => {
    history.push({
      pathname: '/users',
      search: `?term=${filter.term}&friend=${filter.friend}&page=${currentPage}`
    })
  }, [filter, currentPage])

  const onPageChanged = (page: number, pageSize: number = 5) => {
    dispatch(getUsers((page + 1), pageSize, filter))
  }
  const onFilterChanged = (filter: FilterType) => {

    dispatch(getUsers(1, pageSize, filter))

  }
  const followUser = (userId: number) => {
    dispatch(follow(userId))
  }
  const unfollowUser = (userId: number) => {
    dispatch(unfollow(userId))
  }


  return <div style={{ padding: 50 }}>
    <div style={{ display: 'flex', justifyContent: "space-between", margin: 10 }} >
      <Pagination showQuickJumper defaultCurrent={1} total={totalUsersCount} onChange={onPageChanged} />
      <UsersSearchForm onFilterChanged={onFilterChanged} />
    </div>
    <div>
      {
        users.map(u => <User key={u.id} user={u} followingInProgress={followingInProgress} unfollow={unfollowUser} follow={followUser} />
        )}
    </div>
    {/* <Paginatior totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged} currentPage={currentPage} /> */}


  </div>
}

export default Users

