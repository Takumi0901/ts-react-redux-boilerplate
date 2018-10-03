import { compose, lifecycle, HOC, onlyUpdateForKeys, withStateHandlers } from 'recompose'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { connect } from 'react-redux'
import { IStore } from 'src/redux/IStore'

export interface Props {
  updateState: (state: State) => void
}

export interface State {
  text: string
}

type AllFormProps = Props & InjectedFormProps<FormData, Props>

export type SampleProps = State & Props

// const connector = connect((state: IStore) => {
//   return {
//     form: state.form
//   }
// })

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
