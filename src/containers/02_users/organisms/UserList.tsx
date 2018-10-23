import * as React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { usersEnhancer, Props } from '../enhancers/Users'

const CounterActions: React.SFC<Props> = props => {
  return (
    <Paper elevation={0}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>permanent_id</TableCell>
            <TableCell>id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.list.map((e, key) => (
            <TableRow key={key}>
              <TableCell>{e.permanent_id}</TableCell>
              <TableCell>{e.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default usersEnhancer(CounterActions)
