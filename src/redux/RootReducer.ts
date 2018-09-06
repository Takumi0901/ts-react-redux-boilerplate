import * as Redux from 'redux'
import { IStore } from './IStore'
import { routerReducer } from 'react-router-redux'

const rootReducer: Redux.Reducer<IStore> = Redux.combineReducers<IStore>({
  routing: routerReducer
})
export default rootReducer
