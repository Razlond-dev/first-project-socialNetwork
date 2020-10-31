import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { authAPI } from '../../api/api'
import { required } from '../../utils/validation/validators'
import { formControl } from '../common/FormControls/formControls'
import { loginThunkCreator } from '../../redux/Auth_reducer'
import { Redirect } from 'react-router-dom'
import style from '../../components/common/FormControls/formControls.module.css'


const Input = formControl('input')


const LoginForm = (props) => {
  return (

    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='Login' type="text" name={'email'} component={Input} validate={required} />
      </div>
      <div>
        <Field placeholder='Password' type="password" name={'password'} component={Input} validate={required} />
      </div>
      <div>
        <Field type="checkbox" name={'rememberMe'} component={'input'} /> Remember me
      </div>
      {props.error
        ? <div className={style.formSummaryError}> {props.error} </div>
        : null
      }
      <div>
        <button>Login</button>
      </div>
    </form>

  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  const onSubmit = (formData) => {
    props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
  }


  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }

}

export default connect(mapStateToProps, { loginThunkCreator })(Login)














