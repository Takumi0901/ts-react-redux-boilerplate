import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

interface Props {}

class App extends React.Component<Props> {
  constructor(props) {
    super(props)
  }

  public render() {
    return (
      <div>
        <div>Header</div>
        {this.props.children}
        <div>Footer</div>
      </div>
    )
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
  )(App)
)