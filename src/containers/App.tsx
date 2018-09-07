import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from 'src/components/organisms/Header'
import Footer from 'src/components/organisms/Footer'
import baseStyle from 'src/styles/base'
import { ThemeProvider, theme } from 'src/styles'

interface Props {}

class App extends React.Component<Props> {
  constructor(props) {
    super(props)
  }

  public render() {
    baseStyle(theme)
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header />
          {this.props.children}
          <Footer />
        </React.Fragment>
      </ThemeProvider>
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
