import { userType } from "../types/types";
import { InitialStateType, usersReducer, actions } from "./Users_reducer";

let state: InitialStateType

beforeEach(() => {
  state = {
    users: [
      {
        id: 0, name: 'Dima 0', followed: false,
        photos: { small: null, large: null }, status: 'hello 0'
      },
      {
        id: 1, name: 'Dima 1', followed: false,
        photos: { small: null, large: null }, status: 'hello 1'
      },
      {
        id: 2, name: 'Dima 2', followed: true,
        photos: { small: null, large: null }, status: 'hello 2'
      },
      {
        id: 3, name: 'Dima 3', followed: true,
        photos: { small: null, large: null }, status: 'hello 3'
      }
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followinInProgress: [] // array of users ids
  }
})


test('follow success', () => {
  const newState = usersReducer(state, actions.followSuccess(1))

  expect(newState.users[0].followed).toBeFalsy()
  expect(newState.users[1].followed).toBeTruthy()
}) 
test('unfollow success', () => {
  const newState = usersReducer(state, actions.unfollowSuccess(3))

  expect(newState.users[2].followed).toBeTruthy()
  expect(newState.users[3].followed).toBeFalsy()
}) 