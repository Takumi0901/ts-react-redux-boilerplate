import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Header from 'src/containers/app/organisms/Header'
import Footer from 'src/containers/app/organisms/Footer'
import baseStyle from 'src/styles/base'
import styled, { ThemeProvider, theme, css } from 'src/styles/index'
import DrawerContent from './organisms/Drawer'

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
          <ScWrap>
            <Header />
            <DrawerContent />
            <ScContent>{this.props.children}</ScContent>
          </ScWrap>
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

export const ScWrap = styled.div`
  ${() => css`
    flex-grow: 1;
    height: 100vh;
    z-index: 1;
    overflow: hidden;
    position: relative;
    display: flex;
  `};
`

export const ScContent = styled.main`
  ${() => css`
    flex-grow: 1;
    padding: 80px 16px 16px;
    min-width: 0;
  `};
`
