const ADD_MESSAGE = 'ADD-MESSAGE'


type dialogType = {
  id: number
  name: string
  avatarURL: string // mozhet eto izbytochnoe
}

type messageType = {
  id: number
  message: string
}

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
    { id: 2, name: 'Lena', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
    { id: 3, name: 'Andrew', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
    { id: 4, name: 'Nastya', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
    { id: 5, name: 'Yana', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
    { id: 6, name: 'Diana', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
  ] as Array<dialogType>,
  messages: [
    { id: 1, message: 'Hey, how are you?' },
    { id: 2, message: 'You' },
    { id: 3, message: 'Hey, how are you?Good?' },
    { id: 4, message: 'Hey, how are you?Bad?' },
    { id: 5, message: 'I am good!' },
    { id: 6, message: 'Hey, I am new.' },
  ] as Array<messageType>
}

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateType => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: action.newMessageText }]
      }

    default:
      return state
  }
}

type addMessageCreatorActionType = {
  type: typeof ADD_MESSAGE,
  newMessageText: string
}

export const addMessageCreator = (newMessageText: string): addMessageCreatorActionType => ({ type: ADD_MESSAGE, newMessageText })



export default dialogsReducer