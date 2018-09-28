import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from 'src/containers/00_app/App'
import Home from 'src/containers/01_home/Home'

export default (
  <React.Fragment>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </App>
  </React.Fragment>
)
