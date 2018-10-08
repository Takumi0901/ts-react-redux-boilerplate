import * as React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { counterEnhancer, Props } from '../enhancers/Counter'

const CounterActions: React.SFC<Props> = ({ counter, increment, decrement }) => {
  return (
    <Card className={'u-mb-24'}>
      <CardContent>
        <Typography color="textSecondary">Hello World!!</Typography>
        <Typography color="textSecondary">{counter.count}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => increment(1)}>
          +
        </Button>
        <Button size="small" onClick={() => decrement(-1)}>
          -
        </Button>
      </CardActions>
    </Card>
  )
}

export default counterEnhancer(CounterActions)
