import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

export interface Props {
  history: {
    push(path: string): void
  }
}

export const drawerEnhancer = compose<Props, {}>(withRouter)
