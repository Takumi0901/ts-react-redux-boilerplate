import * as React from 'react'
import GridCol from 'src/components/atoms/grid/GridCol'
import Grid from 'src/components/atoms/grid/index'
import { usersEnhancer, Props } from '../enhancers/Users'

const CounterActions: React.SFC<Props> = props => {
  console.log('******************')
  console.log(props.users)
  console.log('******************')
  return (
    <Grid align={'center'}>
      <GridCol size={8}>hげ</GridCol>
    </Grid>
  )
}

export default usersEnhancer(CounterActions)
