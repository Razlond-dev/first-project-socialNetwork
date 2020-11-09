import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actions } from '../../redux/Dialogs_reducer'
import Dialogs from './Dialogs'
import { withAuthRedirectComponent } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { appStateType } from '../../redux/redux-store'


let mapStateToProps = (state: appStateType) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    addMessageCreator: actions.addMessageCreator
  }),
  withAuthRedirectComponent
)(Dialogs)