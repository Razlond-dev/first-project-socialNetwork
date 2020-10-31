import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"
import { authMeThunkCreator } from "./Auth_reducer"

const INITIALISED_SUCCESS = 'INITIALISED_SUCCESS'

let initialState = {
  initialised: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALISED_SUCCESS:


      return {
        ...state,
        initialised: true
      }

    default:
      return state
  }
}

export const initialisedSuccess = () => ({ type: INITIALISED_SUCCESS })

export const initialiseApp = () => {
  return (dispatch) => {
    let dispatchResult = dispatch(authMeThunkCreator())
    Promise.all([dispatchResult])
      .then(() => {
        (dispatch(initialisedSuccess()))
      })
  }
}

// export const loginThunkCreator = (email, password, rememberMe) => (dispatch) => {

//   authAPI.login(email, password, rememberMe)
//     .then(data => {
//       if (data.resultCode === 0) {
//         dispatch(authMeThunkCreator())
//       } else {
//         let messages = data.messages.length > 0 ? data.messages[0] : 'Some error'
//         dispatch(stopSubmit('login', ({ _error: messages })))
//       }
//     })
// }


// export const logoutThunkCreator = () => (dispatch) => {
//   authAPI.logout()
//     .then(response => {
//       if (response.data.resultCode === 0) {
//         dispatch(setAuthUserData(null, null, null, false))
//       }
//     })
// }



export default appReducer