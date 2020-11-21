import { Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { initialStateType } from '../../redux/Dialogs_reducer'
import { maxLengthCreator, required } from '../../utils/validation/validators'
import { formControl } from '../common/FormControls/formControls'
import DialogItem from './DialogItem/DialogItem'
import s from './Dialogs.module.css'
import Message from './Message/Message'

const Textarea = formControl('textarea')

const addMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, NewMessageFormOwnProps> & NewMessageFormOwnProps> = (props) => {
  return (<form onSubmit={props.handleSubmit}>
    <Field style={{ color: '#000' }} component={Textarea} validate={required} name={'newMessageText'} placeholder='Send message' />
    <Button onClick={props.handleSubmit}>Add message</Button>
  </form>)
}

const AddMessageFormRedux = reduxForm<NewMessageFormValuesType, NewMessageFormOwnProps>({
  form: 'dialogsAddMessageForm'
})(addMessageForm)



const Dialogs: React.FC<OwnPropsType> = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(dia => <DialogItem name={dia.name} key={dia.id} id={dia.id} />)
  let messagesElements = props.dialogsPage.messages.map(mes => <Message message={mes.message} key={mes.id} />)

  let addMessage = (values: NewMessageFormValuesType) => {
    props.addMessageCreator(values.newMessageText)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems} style={{ color: 'black' }}>
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

// types
type OwnPropsType = {
  dialogsPage: initialStateType
  addMessageCreator: (newMessageText: string) => void
}
type NewMessageFormValuesType = {
  newMessageText: string
}
type NewMessageFormOwnProps = {}