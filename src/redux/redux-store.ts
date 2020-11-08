import { Action, applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./Auth_reducer";
import dialogsReducer from "./Dialogs_reducer";
import profileReducer from "./Profile_reducer";
import sidebarReducer from "./Sidebar_reducer";
import usersReducer from "./Users_reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./App_reducer";



let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
})

type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type inferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never 

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, appStateType, unknown, A>

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunkMiddleware)
));

// let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


export default store