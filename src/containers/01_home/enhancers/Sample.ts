import { compose, lifecycle, HOC, onlyUpdateForKeys, withStateHandlers } from 'recompose'

export interface Props {
  updateState: (state: State) => void
}

export interface State {
  text: string
}

export type SampleProps = State & Props

export const sampleEnhancer: HOC<SampleProps> = compose(
  onlyUpdateForKeys(['text']),
  withStateHandlers(
    {
      text: 'hogehoge'
    },
    {
      updateState: (state: State) => (value: State) => {
        return { ...state, ...value }
      }
    }
  ),
  lifecycle({
    componentDidMount() {
      console.log('mounted')
    }
  })
)
