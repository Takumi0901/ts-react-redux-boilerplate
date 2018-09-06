import * as React from 'react'
import { Props } from 'src/containers/pages'

const CounterActions: React.SFC<Props> = ({ counter, increment, decrement }) => {
  return (
    <React.Fragment>
      <p>{counter.count}</p>
      <p>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => decrement()}>-</button>
      </p>
    </React.Fragment>
  )
}

export default CounterActions
