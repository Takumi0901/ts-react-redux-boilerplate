import * as React from 'react'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from 'src/routes'

interface Props {
  store: any
}

class Index extends React.Component<Props> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <Provider store={this.props.store}>
        <Router>{routes}</Router>
      </Provider>
    )
  }
}

export default hot(module)(Index)
