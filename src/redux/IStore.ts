import { ICounter } from 'src/redux/types/counter'
import { IUsers } from 'src/redux/types/users'

export interface IStore {
  routing: any
  counter: ICounter
  users: IUsers
}
