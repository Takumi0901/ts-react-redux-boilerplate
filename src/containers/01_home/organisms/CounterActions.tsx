import * as React from 'react'
import Button from 'src/components/atoms/button/index'
import GridCol from 'src/components/atoms/grid/GridCol'
import Grid from 'src/components/atoms/grid/index'
import { Card, CardContent } from 'src/components/atoms/card/index'
import { counterEnhancer, Props } from '../enhancers/Counter'

const CounterActions: React.SFC<Props> = ({ counter, increment, decrement }) => {
  return (
    <Grid align={'center'}>
      <GridCol size={8}>
        <Card>
          <CardContent>
            <h2>Hello World!!</h2>
          </CardContent>
          <CardContent>
            <p className={'u-fz-18 u-fw-b u-mb-16'}>{counter.count}</p>
            <p>
              <Button name={'+'} color={'info'} classes={['u-mr-8']} onClick={() => increment(1)} />
              <Button name={'-'} color={'caution'} onClick={() => decrement(-1)} />
            </p>
          </CardContent>
        </Card>
      </GridCol>
    </Grid>
  )
}

export default counterEnhancer(CounterActions)
