import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from 'src/containers/App'
import PageIndex from 'src/containers/pages/index'

export default (
  <React.Fragment>
    <App>
      <Switch>
        <Route exact path="/" component={PageIndex} />
      </Switch>
    </App>
  </React.Fragment>
)
