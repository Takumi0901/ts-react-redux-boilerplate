import { connect } from 'react-redux'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { compose, HOC } from 'recompose'

type AllFormProps = Props & InjectedFormProps<FormData, Props>

export interface Props {}

const connector = connect(() => {
  return {}
})

export const formEnhancer: HOC<AllFormProps, {}> = compose(
  connector,
  reduxForm({
    form: 'sampleForm',
    enableReinitialize: true
  })
)
