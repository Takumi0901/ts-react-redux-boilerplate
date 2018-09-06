import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Index from './containers/index'
import configureStore from './redux/ConfigureStore'

const store = configureStore()

ReactDOM.render(<Index store={store} />, document.getElementById('root'))
