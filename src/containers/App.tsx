import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from 'src/components/organisms/Header'
import Footer from 'src/components/organisms/Footer'

interface Props {}

class App extends React.Component<Props> {
  constructor(props) {
    super(props)
  }

  public render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
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
