import { withRouter } from 'react-router-dom'
import { compose, HOC } from 'recompose'

export interface Props {
  history: {
    push(path: string): void
  }
}

export const drawerEnhancer: HOC<Props, {}> = compose(withRouter)
