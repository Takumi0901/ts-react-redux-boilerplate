import { ICounter } from 'src/redux/types/counter'
import { CounterRecord } from 'src/redux/records/counter'
import actionCreatorFactory from 'typescript-fsa'
import { reducerWithInitialState } from 'typescript-fsa-reducers/dist'

// Action types
const actionCreator = actionCreatorFactory()
export enum ActionTypes {
  INCREMENT = 'counter/INCREMENT',
  DECREMENT = 'counter/DECREMENT'
}

export const increment = actionCreator<void>(ActionTypes.INCREMENT)
export const decrement = actionCreator<void>(ActionTypes.DECREMENT)

const initialState = new CounterRecord()

// Reducer
export const countUpReducer = reducerWithInitialState(initialState)
  .case(increment, state => {
    console.log('*****************')
    console.log(state)
    console.log('*****************')
    return { count: state.count + 1 }
  })
  .case(decrement, state => {
    return { count: state.count - 1 > 0 ? state.count - 1 : 0 }
  })
