import * as React from 'react'
import { Props } from '../Home'
import { Helmet } from 'react-helmet'
import CounterActions from '../organisms/CounterActions'

class TempIndex extends React.Component<Props> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <div>
        <Helmet>
          <title>title</title>
        </Helmet>
        <CounterActions {...this.props} />
      </div>
    )
  }
}

export default TempIndex
