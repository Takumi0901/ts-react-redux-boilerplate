import * as Redux from 'redux'
import { connect } from 'react-redux'
import { IStore } from 'src/redux/IStore'
import { compose, lifecycle, onlyUpdateForKeys } from 'recompose'
import { decrement, increment } from 'src/redux/modules/counter/index'
import { ICounter } from 'src/redux/modules/counter/types'

export interface Props {
  increment(count: number): void
  decrement(count: number): void
  counter: ICounter
}

const connector = connect(
  (state: IStore) => {
    return {
      counter: state.counter
    }
  },
  dispatch => Redux.bindActionCreators({ increment, decrement }, dispatch)
)

export const counterEnhancer = compose<Props, {}>(
  connector,
  onlyUpdateForKeys(['counter']),
  lifecycle({
    componentDidMount() {
      console.log('mounted')
    }
  })
)
