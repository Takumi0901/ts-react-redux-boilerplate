import { Record } from 'immutable'
import { ICounter } from 'src/redux/types/counter'

export class CounterRecord extends Record({ count: 1 }) implements ICounter {
  inc(payload: ICounter) {
    console.log('*****************')
    console.log(payload)
    console.log('*****************')
    return this.withMutations(s => s.set('count', 2))
  }
}
