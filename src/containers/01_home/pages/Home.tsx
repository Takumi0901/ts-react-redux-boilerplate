import * as React from 'react'
import { withRouter } from 'react-router-dom'
import CounterActions from '../organisms/CounterActions'
import StateSample from '../organisms/StateSample'
import { Helmet } from 'react-helmet'

const Home: React.SFC<{}> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>title</title>
      </Helmet>
      <CounterActions />
      <StateSample />
    </React.Fragment>
  )
}

export default withRouter<any>(Home)
