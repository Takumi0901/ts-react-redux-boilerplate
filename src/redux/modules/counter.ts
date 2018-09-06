import { ICounter, ICounterAction } from 'src/redux/types/counter'
// Action types
export const INCREMENT: string = 'counter/INCREMENT'
export const DECREMENT: string = 'counter/DECREMENT'

export function increment(): ICounterAction {
  return {
    type: INCREMENT
  }
}

export function decrement(): ICounterAction {
  return {
    type: DECREMENT
  }
}

const initialState: ICounter = {
  count: 1
}

// Reducer
export function countUpReducer(state = initialState, action?: ICounterAction) {
  const { type } = action
  switch (type) {
    case INCREMENT:
      return {
        count: state.count + 1
      }
    case DECREMENT:
      return {
        count: state.count - 1 > 0 ? state.count - 1 : 0
      }
    default:
      return state
  }
}
