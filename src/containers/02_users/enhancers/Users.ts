import { connect } from 'react-redux'
import { IStore } from 'src/redux/IStore'
import { compose, lifecycle, HOC } from 'recompose'
import { failedUsers, requestUsers, successUsers } from 'src/redux/modules/users'
import { IUsers } from 'src/redux/types/users'
import API from 'src/api/API'

export interface Props {
  getUsers(props: { page: 1; perPage: 20 }): void
  users: IUsers
}

const mapStateToProps = (state: IStore) => state

const mapDispatchToProps = dispatch => ({ dispatch })

const mergeProps = (state: IStore, { dispatch }, props: Props) => {
  return {
    ...props,
    users: state.users,
    getUsers(props: { page: 1; perPage: 20 }) {
      dispatch(requestUsers(props))
      API.getTest(props)
        .then(res => dispatch(successUsers(res.body)))
        .catch(err => dispatch(failedUsers(err)))
    }
  }
}

export const usersEnhancer: HOC<Props, {}> = compose(
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
