import { inferActionsTypes } from "./redux-store"

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
    { id: 2, message: 'Good, how are you?' },
    { id: 3, message: 'Unfortunately chatting is not available yet. Will be released in the future with socket.io' },
  ] as Array<messageType>
}

export const actions = {
  addMessageCreator: (newMessageText: string) => ({ type: 'ADD-MESSAGE', newMessageText } as const)
}

const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {

  switch (action.type) {
    case 'ADD-MESSAGE':
      return {
        ...state,
        messages: [...state.messages, { id: 7, message: action.newMessageText }]
      }

    default:
      return state
  }
}

export default dialogsReducer

// types 
export type initialStateType = typeof initialState
type ActionsType = inferActionsTypes<typeof actions>

type dialogType = {
  id: number
  name: string
  avatarURL: string // mozhet eto izbytochnoe
}

type messageType = {
  id: number
  message: string
}