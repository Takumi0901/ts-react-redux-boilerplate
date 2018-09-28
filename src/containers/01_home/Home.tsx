import * as Redux from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { increment, decrement } from 'src/redux/modules/counter'
import TempHome from 'src/containers/01_home/templates/TempHome'
import { ICounter } from 'src/redux/types/counter'
import { IStore } from 'src/redux/IStore'

export interface Props {
  increment(count: number): void
  decrement(count: number): void
  counter: ICounter
}

const mapStateToProps = (state: IStore) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return Redux.bindActionCreators({ increment, decrement }, dispatch)
}

export default withRouter<any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TempHome)
)
