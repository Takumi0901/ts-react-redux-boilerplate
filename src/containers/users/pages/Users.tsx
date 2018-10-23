import * as React from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import UserList from '../organisms/UserList'

const Users: React.SFC<{}> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>title</title>
      </Helmet>
      <UserList />
    </React.Fragment>
  )
}

export default withRouter<any>(Users)
