import { authMeThunkCreator } from "./Auth_reducer"
import { inferActionsTypes } from "./redux-store"

let initialState = {
  initialised: false
}

export type initialStateType = typeof initialState
type ActionsType = inferActionsTypes<typeof actions>

const appReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case 'INITIALISED_SUCCESS':


      return {
        ...state,
        initialised: true
      }

    default:
      return state
  }
}

const actions = {
  initialisedSuccess: () => ({ type: 'INITIALISED_SUCCESS' } as const)
}

export const initialisedSuccess = () => ({ type: 'INITIALISED_SUCCESS' })

export const initialiseApp = () => {
  return (dispatch: any) => {
    let dispatchResult = dispatch(authMeThunkCreator())
    Promise.all([dispatchResult])
      .then(() => {
        (dispatch(actions.initialisedSuccess()))
      })
  }
}




export default appReducer