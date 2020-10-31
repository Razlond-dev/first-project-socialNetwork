import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/Dialogs_reducer'
import Dialogs from './Dialogs'
import { withAuthRedirectComponent } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessageText) => { dispatch(addMessageCreator(newMessageText)) }
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirectComponent
)(Dialogs)