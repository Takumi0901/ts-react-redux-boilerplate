import * as Redux from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { increment, decrement } from 'src/redux/modules/counter'
import TempIndex from 'src/components/templates'
import { ICounter } from 'src/redux/types/counter'

export interface Props {
  increment: () => void
  decrement: () => void
  counter: ICounter
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return Redux.bindActionCreators({ increment, decrement }, dispatch)
}

export default withRouter<any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TempIndex)
)
