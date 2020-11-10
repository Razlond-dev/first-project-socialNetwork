import React from 'react'
import Paginatior from '../common/Paginator/Paginator'
import User from './User'
import { userType } from '../../types/types'
import { Field, Form, Formik } from 'formik'


type propsType = {
  totalUsersCount: number
  pageSize: number
  onPageChanged: (pageNumber: number) => void
  currentPage: number
  followingInProgress: Array<number>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  users: Array<userType>
}

const Users: React.FC<propsType> = (props) => {

  return <div>
    <UsersSearchForm />
    <Paginatior totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged} currentPage={props.currentPage} />

    {
      props.users.map(u => <User key={u.id} user={u} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow} />)
    }
  </div>
}

type UserSearchFormObjectType = {
  term: string
}

const userSearchFormValidate = (values) => {
  const errors = {};
  return errors;
}

const UsersSearchForm = () => {

  const submit = (values: UserSearchFormObjectType, { setSubmitting }: {setSubmitting: (isSubmitting: boolean) => void}) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400)
  }

  return (
    <div>
      <Formik
        initialValues={{ term: ''}}
        validate={userSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <button type="submit" disabled={isSubmitting}>
              Find
           </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}


export default Users

