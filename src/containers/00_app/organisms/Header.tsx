import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styled from 'src/styles/index'

interface Props {}

const Header: React.SFC<Props> = () => {
  return (
    <ScAppBar position="absolute" color="primary">
      <Toolbar>
        <Typography variant="title" color="inherit">
          Boilerplate
        </Typography>
      </Toolbar>
    </ScAppBar>
  )
}

export default Header

export const ScAppBar = styled(AppBar)`
  && {
    z-index: 99999999;
  }
`
