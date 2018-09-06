import * as Redux from 'redux'
import { IStore } from 'src/redux/IStore'
import { routerReducer } from 'react-router-redux'
import { countUpReducer } from 'src/redux/modules/counter'

const rootReducer: Redux.Reducer<IStore> = Redux.combineReducers<IStore>({
  routing: routerReducer,
  counter: countUpReducer
})
export default rootReducer
