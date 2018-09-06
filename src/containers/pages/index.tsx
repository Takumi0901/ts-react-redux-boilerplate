import * as Redux from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TempIndex from 'src/components/templates'

export interface Props {}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return Redux.bindActionCreators({}, dispatch)
}

export default withRouter<any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TempIndex)
)
