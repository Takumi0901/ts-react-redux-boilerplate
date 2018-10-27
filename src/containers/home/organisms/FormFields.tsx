import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { Field, WrappedFieldProps } from 'redux-form'
import { formEnhancer, AllFormProps } from '../enhancers/Form'
import Paper from '@material-ui/core/Paper/Paper'

type FieldProps = {
  label?: string
  errorText?: any
} & WrappedFieldProps

const renderTextField: React.SFC<FieldProps> = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField label={label} errorText={touched && error} {...input} {...custom} />
)

const FormFields: React.SFC<AllFormProps> = () => {
  return (
    <Paper className={'u-pt-24 u-pr-24 u-pb-24 u-pl-24 u-mb-24'} square elevation={0}>
      <Typography variant="headline">Form Element</Typography>
      <Field component={renderTextField} name="search" type="text" label={'hogehoge'} />
      <br />
      <Field component={renderTextField} name="hgoehoge" type="text" label={'fugafuga'} />
    </Paper>
  )
}

export const FormFieldsElement = formEnhancer(FormFields)
