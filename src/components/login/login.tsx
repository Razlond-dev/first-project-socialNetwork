import React from 'react'
import { connect } from 'react-redux'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { authAPI } from "../../api/authAPI"
import { required } from '../../utils/validation/validators'
import { formControl } from '../common/FormControls/formControls'
import { loginThunkCreator } from '../../redux/Auth_reducer'
import { Redirect } from 'react-router-dom'
import style from '../../components/common/FormControls/formControls.module.css'
import { appStateType } from '../../redux/redux-store'


const Input = formControl('input')



const LoginForm: React.FC<InjectedFormProps<loginFormValuesType, loginFormOwnProps> & loginFormOwnProps> = (props) => {
  return (

    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder='Email' type="text" name={'email'} component={Input} validate={required} />
      </div>
      <div>
        <Field placeholder='Password' type="password" name={'password'} component={Input} validate={required} />
      </div>
      <div>
        <Field type="checkbox" name={'rememberMe'} component={'input'} /> Remember me
      </div>

      { props.captchaUrl && <img src={props.captchaUrl} />}
      { props.captchaUrl && <Field placeholder='Symbols from image' name={'captcha'} component={Input} validate={required} />}

      {props.error
        ? <div className='formSummaryError'> {props.error} </div>
        : null}

      <div>
        <button>Login</button>
      </div>
    </form>

  )
}

const LoginReduxForm = reduxForm<loginFormValuesType, loginFormOwnProps>({
  form: 'login'
})(LoginForm)



const Login: React.FC<mapStatePropsType & mapDispatchPropsType> = (props) => {

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  const onSubmit = (formData: loginFormValuesType) => {
    props.loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state: appStateType): mapStatePropsType => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }

}

export default connect(mapStateToProps, { loginThunkCreator })(Login)


// types
type loginFormOwnProps = {
  captchaUrl: string | null
}
type mapStatePropsType = {
  captchaUrl: string | null
  isAuth: boolean
}
type mapDispatchPropsType = {
  loginThunkCreator: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
type loginFormValuesType = {
  email: string
  password: string
  captcha: string
  rememberMe: boolean
}













