import 'babel-polyfill'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Index from 'src/containers/index'
import configureStore from 'src/redux/ConfigureStore'

const store = configureStore()

ReactDOM.render(<Index store={store} />, document.getElementById('root'))
