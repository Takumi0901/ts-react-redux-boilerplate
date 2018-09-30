import * as Redux from 'redux'
import { connect } from 'react-redux'
import { IStore } from 'src/redux/IStore'
import { compose, lifecycle, HOC } from 'recompose'
import { getUsers } from 'src/redux/modules/users'
import { IUsers } from 'src/redux/types/users'

export interface Props {
  getUsers(): void
  users: IUsers
}

const connector = connect(
  (state: IStore) => {
    return {
      users: state.users
    }
  },
  dispatch => Redux.bindActionCreators({ getUsers }, dispatch)
)

export const usersEnhancer: HOC<Props, {}> = compose(
  connector,
  lifecycle({
    componentDidMount() {
      this.props.getUsers({ page: 1, perPage: 20 })
    }
  })
)
