import * as React from 'react'
import { SampleProps, sampleEnhancer } from 'src/containers/01_home/enhancers/Sample'
import Button from 'src/components/atoms/button/index'
import GridCol from 'src/components/atoms/grid/GridCol'
import Grid from 'src/components/atoms/grid/index'
import { Card, CardContent } from 'src/components/atoms/card/index'

const StateSample: React.SFC<SampleProps> = props => {
  console.log('*****************')
  console.log('FFFFFFFFFFFFFFF')
  console.log('*****************')
  return (
    <Grid align={'center'}>
      <GridCol size={8}>
        <Card>
          <CardContent>
            <h2>{props.text}</h2>
            <Button
              name={'hogehoge'}
              color={'info'}
              classes={['u-mr-8']}
              onClick={() => props.updateState({ text: 'gheohgho' })}
            />
          </CardContent>
        </Card>
      </GridCol>
    </Grid>
  )
}

export default sampleEnhancer(StateSample)
