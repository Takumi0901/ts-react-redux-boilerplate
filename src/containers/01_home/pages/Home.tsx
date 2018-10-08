import * as React from 'react'
import { withRouter } from 'react-router-dom'
import CounterActions from '../organisms/CounterActions'
import StateSample from '../organisms/StateSample'
import { FormFieldsElement } from '../organisms/FormFields'
import { Helmet } from 'react-helmet'

type Props = {}

const Home: React.SFC<Props> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>title</title>
      </Helmet>
      <CounterActions />
      <StateSample />
      <FormFieldsElement />
    </React.Fragment>
  )
}

export default withRouter<any>(Home)
