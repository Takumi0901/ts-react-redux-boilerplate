import * as React from 'react'
import { SampleProps, sampleEnhancer } from 'src/containers/01_home/enhancers/Sample'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const StateSample: React.SFC<SampleProps> = props => {
  return (
    <Card className={'u-mb-24'}>
      <CardContent>
        <Typography>{props.text}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => props.updateState({ text: 'gheohgho' })}>Click!</Button>
      </CardActions>
    </Card>
  )
}

export default sampleEnhancer(StateSample)
