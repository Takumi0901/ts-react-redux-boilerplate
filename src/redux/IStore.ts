import { ICounter } from 'src/redux/counter/types'
import { IUsers } from 'src/redux/users/types'

export interface IStore {
  routing: any
  counter: ICounter
  users: IUsers
  form: any
}
