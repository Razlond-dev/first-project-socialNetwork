import { Field, Form, Formik } from 'formik'
import React from 'react';
import { FilterType } from '../../redux/Users_reducer';
import { useSelector } from 'react-redux';
import { getUsersFilter } from './../../redux/Users_selectors';

const userSearchFormValidate = (values) => {
  const errors = {};
  return errors;
}


type FormType = {
  term: string
  friend: 'true' | 'false' | 'null'
}

type PropsType = {
  onFilterChanged: (filter: FilterType) => void
}

export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

  const filter = useSelector(getUsersFilter)

  const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
    }

    props.onFilterChanged(filter)
    setSubmitting(false)
  }

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{ term: filter.term, friend: String(filter.friend) as 'true' | 'false' | 'null' }}
        validate={userSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <Field name="friend" as="select">
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Find
           </button>
          </Form>
        )}
      </Formik>
    </div>
  )
})