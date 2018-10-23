import * as React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { counterEnhancer, Props } from '../enhancers/Counter'

const CounterActions: React.SFC<Props> = ({ counter, increment, decrement }) => {
  return (
    <Paper className={'u-pt-24 u-pr-24 u-pb-24 u-pl-24 u-mb-24'} square elevation={0}>
      <Typography variant="headline">Counter!!</Typography>
      <Typography variant="display1">{counter.count}</Typography>
      <Button variant="contained" color="primary" onClick={() => increment(1)}>
        +
      </Button>
      <Button variant="contained" color="secondary" onClick={() => decrement(-1)}>
        -
      </Button>
    </Paper>
  )
}

export default counterEnhancer(CounterActions)
