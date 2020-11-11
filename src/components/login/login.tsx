import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { required } from '../../utils/validation/validators'
import { formControl } from '../common/FormControls/formControls'
import { loginThunkCreator } from '../../redux/Auth_reducer'
import { Redirect } from 'react-router-dom'
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


export const LoginPage: React.FC = () => {
  const dispatch = useDispatch()

  const captchaUrl = useSelector( (state: appStateType) => state.auth.captchaUrl )
  const isAuth = useSelector( (state: appStateType) => state.auth.isAuth )
  
  if (isAuth) {
    return <Redirect to={'/profile'} />
  }

  const onSubmit = (formData: loginFormValuesType) => {
    dispatch(loginThunkCreator(formData.email, formData.password, formData.rememberMe, formData.captcha))
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
  )
}


// types
type loginFormOwnProps = {
  captchaUrl: string | null
}
type loginFormValuesType = {
  email: string
  password: string
  captcha: string
  rememberMe: boolean
}













