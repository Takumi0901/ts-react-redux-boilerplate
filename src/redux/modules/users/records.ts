import { Record } from 'immutable'
import { IUsers } from 'src/redux/modules/users/types'

export class UsersRecord
  extends Record({ page: 1, perPage: 1, list: [], isFetching: false, isSucceeded: false, isFailed: false })
  implements IUsers {
  request(payload) {
    return this.withMutations(s =>
      s
        .set('isFetching', true)
        .set('page', payload.page)
        .set('perPage', payload.perPage)
    )
  }
  success(payload) {
    return this.withMutations(s =>
      s
        .set('isSucceeded', true)
        .set('isFetching', false)
        .set('list', payload)
    )
  }
  failed() {
    return this.withMutations(s => s.set('isFailed', true).set('isSucceeded', false))
  }
}
