import * as React from 'react'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import { Link } from 'react-router-dom'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import Divider from '@material-ui/core/Divider/Divider'
import Drawer from '@material-ui/core/Drawer'
import styled from 'src/styles'

interface Props {}

const DrawerContent: React.SFC<Props> = () => (
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
)

export default DrawerContent

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
