import * as React from 'react'
import { hot } from 'react-hot-loader'

interface Props {}

class Index extends React.Component<Props> {
  constructor(props) {
    super(props)
  }

  public render() {
    return <div>Hellocascasc</div>
  }
}

export default hot(module)(Index)
