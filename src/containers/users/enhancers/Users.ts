import { connect } from 'react-redux'
import { IStore } from 'src/redux/IStore'
import { compose, lifecycle } from 'recompose'
import { failedUsers, requestUsers, successUsers } from 'src/redux/modules/users/index'
import { IUsers } from 'src/redux/modules/users/types'
import API from 'src/api/API'

export interface Props {
  users: IUsers
  getUsers(values: { page: number; perPage: number }): void
}

const mapStateToProps = (state: IStore) => state

const mapDispatchToProps = dispatch => ({ dispatch })

const mergeProps = (state: IStore, { dispatch }, props: Props) => {
  return {
    ...props,
    users: state.users,
    getUsers(values) {
      dispatch(requestUsers(values))
      API.getTest(values)
        .then(res => dispatch(successUsers(res.body)))
        .catch(err => dispatch(failedUsers(err)))
    }
  }
}

export const usersEnhancer = compose<Props, {}>(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  ),
  lifecycle({
    componentDidMount() {
      this.props.getUsers({ page: 1, perPage: 20 })
    }
  })
)
