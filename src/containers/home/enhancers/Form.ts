import { connect } from 'react-redux'
import { reduxForm, InjectedFormProps } from 'redux-form'
import { compose } from 'recompose'

export type AllFormProps = Props & InjectedFormProps<FormData, Props>

export interface Props {}

const connector = connect(() => {
  return {}
})

export const formEnhancer = compose<AllFormProps, {}>(
  connector,
  reduxForm({
    form: 'sampleForm',
    enableReinitialize: true
  })
)
