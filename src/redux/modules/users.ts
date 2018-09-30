import axios from 'axios'
import { UsersRecord } from 'src/redux/records/users'
import { IUser } from 'src/redux/types/users'
import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist'

const API = axios.create({
  baseURL: 'https://qiita.com/api/v2',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
})

// Action types
const actionCreator = actionCreatorFactory()
export enum ActionTypes {
  REQUEST = 'users/REQUEST',
  SUCCESS = 'users/SUCCESS',
  FAILED = 'users/FAILED'
}

export const requestUsers = actionCreator<{ page: number; perPage: number }>(ActionTypes.REQUEST)
export const successUsers = actionCreator<IUser>(ActionTypes.SUCCESS)
export const failedUsers = actionCreator<any>(ActionTypes.FAILED)

export const getUsers = (props: { page: number; perPage: number }) => {
  const { page, perPage } = props
  return dispatch => {
    dispatch(requestUsers(props))
    return API.get(`/users?page=${page}&per_page=${perPage}`)
      .then(res => dispatch(successUsers(res.data)))
      .catch(err => dispatch(failedUsers(err)))
  }
}

// Reducer
export const usersReducer = reducerWithInitialState(new UsersRecord())
  .case(requestUsers, (state, payload) => state.request(payload))
  .case(successUsers, (state, payload) => state.success(payload))
  .case(failedUsers, state => state.failed())
