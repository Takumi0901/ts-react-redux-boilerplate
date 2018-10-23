import { UsersRecord } from 'src/redux/users/records'
import { IUser } from 'src/redux/users/types'
import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist'

// Action types
const actionCreator = actionCreatorFactory()
export enum ActionTypes {
  REQUEST = 'users/REQUEST',
  SUCCESS = 'users/SUCCESS',
  FAILED = 'users/FAILED'
}

export const requestUsers = actionCreator<{ page: number; perPage: number }>(ActionTypes.REQUEST)
export const successUsers = actionCreator<IUser[]>(ActionTypes.SUCCESS)
export const failedUsers = actionCreator<any>(ActionTypes.FAILED)

// Reducer
export const usersReducer = reducerWithInitialState(new UsersRecord())
  .case(requestUsers, (state, payload) => state.request(payload))
  .case(successUsers, (state, payload) => state.success(payload))
  .case(failedUsers, state => state.failed())
