import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { appStateType } from '../redux/redux-store'

let mapStateToPropsForRedirect = (state: appStateType) => {
  return {
    isAuth: state.auth.isAuth
  }
}


export function withAuthRedirectComponent<WCP> (WrappedComponent: React.ComponentType<WCP>) {
  const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let {isAuth, ...restProps} = props
    if (!isAuth) return <Redirect to={'login'} />
    
      return <WrappedComponent {...restProps as WCP} />
  }
  let ConnectedRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, appStateType>(mapStateToPropsForRedirect)(RedirectComponent)
  return ConnectedRedirectComponent
}

// types
type MapPropsType = {
  isAuth: boolean
}

type DispatchPropsType = {}