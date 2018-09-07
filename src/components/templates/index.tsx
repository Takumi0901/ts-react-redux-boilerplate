import * as React from 'react'
import { Props } from 'src/containers/pages'
import { Helmet } from 'react-helmet'
import CounterActions from 'src/components/molecules/CounterActions'

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
