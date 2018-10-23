import * as Redux from 'redux'
import { IStore } from 'src/redux/IStore'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import { countUpReducer } from 'src/redux/counter'
import { usersReducer } from 'src/redux/users'

const rootReducer: Redux.Reducer<IStore> = Redux.combineReducers<IStore>({
  routing: routerReducer,
  form: formReducer,
  counter: countUpReducer,
  users: usersReducer
})
export default rootReducer
