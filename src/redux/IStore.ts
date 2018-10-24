import { ICounter } from 'src/redux/modules/counter/types'
import { IUsers } from 'src/redux/modules/users/types'

export interface IStore {
  routing: any
  counter: ICounter
  users: IUsers
  form: any
}
