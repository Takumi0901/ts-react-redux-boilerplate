import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

// HOC
import App from './containers/App'

export default (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </React.Fragment>
)
