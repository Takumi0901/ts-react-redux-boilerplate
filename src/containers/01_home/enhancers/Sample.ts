import { compose, lifecycle, HOC, withStateHandlers } from 'recompose'

export interface Props {
  updateState: (state: State) => void
}

export interface State {
  text: string
}

export type SampleProps = State & Props

export const sampleEnhancer: HOC<SampleProps> = compose(
  withStateHandlers(
    {
      text: 'hogehoge'
    },
    {
      updateState: (state: State) => (value: State) => {
        if (state.text !== value.text) {
          return { ...state, ...value }
        }
      }
    }
  ),
  lifecycle({
    componentDidMount() {
      console.log('mounted')
    }
  })
)
