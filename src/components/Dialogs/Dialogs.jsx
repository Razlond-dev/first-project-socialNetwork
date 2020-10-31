import React from 'react'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { addMessageCreator, updateNewMessageTextCreator } from '../../redux/Dialogs_reducer'
import { maxLengthCreator, required } from '../../utils/validation/validators'
import { formControl } from '../common/FormControls/formControls'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Textarea = formControl('textarea')
const maxLength200 = maxLengthCreator(200)

const addMessageForm = (props) => {
  return (<form onSubmit={props.handleSubmit}>
    <Field component={Textarea} validate={required, maxLength200} name={'newMessageText'} placeholder='Send message' />
    <button>Add message</button>
  </form>)
}


const AddMessageFormRedux = reduxForm({
  form: 'dialogsAddMessageForm'
})(addMessageForm)


const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(dia => <DialogItem name={dia.name} key={dia.id} id={dia.id} />)
  let messagesElements = props.dialogsPage.messages.map(mes => <Message message={mes.message} key={mes.id} />)
  let newMessageElement = props.dialogsPage.newMessageText

  let addMessage = (values) => {
    props.addMessage(values.newMessageText)
  }

  if (!props.isAuth) return <Redirect to={'login'} />

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>

      <div className={s.messages}>
        <div>
          {messagesElements}
        </div>
        <AddMessageFormRedux onSubmit={addMessage} />
      </div>
    </div>)
}

export default Dialogs