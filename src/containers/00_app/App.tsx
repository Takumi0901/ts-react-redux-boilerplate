import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import Header from 'src/containers/00_app/organisms/Header'
import Footer from 'src/containers/00_app/organisms/Footer'
import baseStyle from 'src/styles/base'
import { ThemeProvider, theme } from 'src/styles/index'

interface Props {}

class App extends React.Component<Props> {
  constructor(props: any) {
    super(props)
  }

  public render() {
    baseStyle(theme)
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header />
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/users'}>Users</Link>
            </li>
          </ul>
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

const mapDispatchToProps = (dispatch: any) => {
  return Redux.bindActionCreators({}, dispatch)
}

export default withRouter<any>(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
)
