import { CounterRecord } from 'src/redux/modules/counter/records'
import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist'

// Action types
const actionCreator = actionCreatorFactory()
export enum ActionTypes {
  INCREMENT = 'counter/INCREMENT',
  DECREMENT = 'counter/DECREMENT'
}

export const increment = actionCreator<number>(ActionTypes.INCREMENT)
export const decrement = actionCreator<number>(ActionTypes.DECREMENT)

// Reducer
export const countUpReducer = reducerWithInitialState(new CounterRecord())
  .case(increment, (state, payload) => state.inc(payload))
  .case(decrement, (state, payload) => state.dec(payload))
