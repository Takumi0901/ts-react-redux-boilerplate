import * as Redux from 'redux'
import { IStore } from 'src/redux/IStore'
import { routerReducer } from 'react-router-redux'
import { countUpReducer } from 'src/redux/modules/counter'
import { usersReducer } from 'src/redux/modules/users'

const rootReducer: Redux.Reducer<IStore> = Redux.combineReducers<IStore>({
  routing: routerReducer,
  counter: countUpReducer,
  users: usersReducer
})
export default rootReducer
