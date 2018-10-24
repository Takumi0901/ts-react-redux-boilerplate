import { UsersRecord } from 'src/redux/modules/users/records'
import { IUser } from 'src/redux/modules/users/types'
import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist'

// Action types
const actionCreator = actionCreatorFactory()
export enum ActionTypes {
  REQUEST = 'get/users/REQUEST',
  SUCCESS = 'get/users/SUCCESS',
  FAILED = 'get/users/FAILED'
}

export const requestUsers = actionCreator<{ page: number; perPage: number }>(ActionTypes.REQUEST)
export const successUsers = actionCreator<IUser[]>(ActionTypes.SUCCESS)
export const failedUsers = actionCreator<any>(ActionTypes.FAILED)

// Reducer
export const usersReducer = reducerWithInitialState(new UsersRecord())
  .case(requestUsers, (state, payload) => state.request(payload))
  .case(successUsers, (state, payload) => state.success(payload))
  .case(failedUsers, state => state.failed())
