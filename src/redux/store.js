import dialogsReducer from "./Dialogs_reducer"
import profileReducer from "./Profile_reducer"
import sidebarReducer from "./Sidebar_reducer"


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hey, how are you?', likesCount: 9 },
        { id: 2, message: 'You are the best!', likesCount: 240 },
        { id: 3, message: 'Hey, how are you?Good?', likesCount: 1 },
        { id: 4, message: 'Hey, how are you?Bad?', likesCount: 5 },
        { id: 5, message: 'I am good!', likesCount: 20 },
        { id: 6, message: 'Hey, I am new.', likesCount: 10 },
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dimych', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
        { id: 2, name: 'Lena', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
        { id: 3, name: 'Andrew', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
        { id: 4, name: 'Nastya', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
        { id: 5, name: 'Yana', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
        { id: 6, name: 'Diana', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
      ],
      messages: [
        { id: 1, message: 'Hey, how are you?' },
        { id: 2, message: 'You' },
        { id: 3, message: 'Hey, how are you?Good?' },
        { id: 4, message: 'Hey, how are you?Bad?' },
        { id: 5, message: 'I am good!' },
        { id: 6, message: 'Hey, I am new.' },
      ],
      newMessageText: ''
    },
    sidebar: {
      friends: [
        { id: 1, name: 'Dimych', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
        { id: 2, name: 'Lena', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
        { id: 3, name: 'Andrew', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
        { id: 4, name: 'Nastya', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
        { id: 5, name: 'Yana', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
        { id: 6, name: 'Diana', avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg' },
      ]
    }
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },


  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}






export default store