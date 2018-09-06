import * as React from 'react'
import { Props } from 'src/containers/pages'
import { Helmet } from 'react-helmet'

class TempIndex extends React.Component<Props> {
  constructor(props) {
    super(props)
  }

  public render() {
    return (
      <div>
        <Helmet>
          <title>title</title>
        </Helmet>
        Hello World!!
      </div>
    )
  }
}

export default TempIndex
