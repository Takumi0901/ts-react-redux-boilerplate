import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

interface Props {}

class PageIndex extends React.Component<Props> {
  constructor(props) {
    super(props)
  }

  public render() {
    return <div>Hello World!!</div>
  }
}

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
  )(PageIndex)
)
