import { authMeThunkCreator } from "./Auth_reducer"

const INITIALISED_SUCCESS = 'INITIALISED_SUCCESS'


export type initialStateType = {
  initialised: boolean
}

let initialState: initialStateType = {
  initialised: false
}

const appReducer = (state = initialState, action: any): initialStateType => {
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

type initialisedSuccessActionType = {
  type: typeof INITIALISED_SUCCESS
}


export const initialisedSuccess = (): initialisedSuccessActionType => ({ type: INITIALISED_SUCCESS })

export const initialiseApp = () => {
  return (dispatch: any) => {
    let dispatchResult = dispatch(authMeThunkCreator())
    Promise.all([dispatchResult])
      .then(() => {
        (dispatch(initialisedSuccess()))
      })
  }
}




export default appReducer