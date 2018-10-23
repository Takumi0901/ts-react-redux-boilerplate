import * as React from 'react'
import List from '@material-ui/core/List/List'
import ListItem from '@material-ui/core/ListItem/ListItem'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import Divider from '@material-ui/core/Divider/Divider'
import Drawer from '@material-ui/core/Drawer'
import styled from 'src/styles'
import { drawerEnhancer, Props } from '../enhancers/Drawer'

const DrawerContent: React.SFC<Props> = ({ history }) => (
  <ScDrawer variant="permanent" classes={{ paper: 'paper' }}>
    <List component="nav">
      <ListItem button onClick={() => history.push('/')}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button onClick={() => history.push('/users')}>
        <ListItemText primary="Users" />
      </ListItem>
    </List>
    <Divider />
  </ScDrawer>
)

export default drawerEnhancer(DrawerContent)

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
