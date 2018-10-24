import * as Redux from 'redux'
import rootReducer from 'src/redux/RootReducer'
import thunk from 'redux-thunk'
import { IStore } from 'src/redux/IStore'
import responseCamelizer from './middleware/responseCamelizer'
import requestDecamelizer from './middleware/requestDecamelizer'

const configureStore = (initialState?: IStore): Redux.Store<IStore> => {
  let composes

  if (process.env.NODE_ENV === 'development') {
    const composeEnhancers =
      typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
        ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({})
        : Redux.compose
    composes = composeEnhancers(Redux.applyMiddleware(thunk, responseCamelizer, requestDecamelizer))
  } else {
    composes = Redux.compose(Redux.applyMiddleware(thunk, responseCamelizer, requestDecamelizer))
  }

  return Redux.createStore(rootReducer, initialState, composes)
}

export default configureStore
