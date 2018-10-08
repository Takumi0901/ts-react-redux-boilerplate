import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import Header from 'src/containers/00_app/organisms/Header'
import Footer from 'src/containers/00_app/organisms/Footer'
import baseStyle from 'src/styles/base'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import styled, { ThemeProvider, theme, css } from 'src/styles/index'

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
            <ScDrawer variant="permanent" classes={{ paper: 'paper' }}>
              <List component="nav">
                <ListItem button>
                  <Link to={'/'}>
                    <ListItemText primary="Home" />
                  </Link>
                </ListItem>
                <ListItem button>
                  <Link to={'/users'}>
                    <ListItemText primary="Users" />
                  </Link>
                </ListItem>
              </List>
              <Divider />
            </ScDrawer>
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

interface DrawerProps {
  variant: string
  classes: any
}

export const ScDrawer = styled(Drawer as React.SFC<DrawerProps>)`
  & .paper {
    position: relative;
    width: 240px;
    padding-top: 80px;
  }
`
