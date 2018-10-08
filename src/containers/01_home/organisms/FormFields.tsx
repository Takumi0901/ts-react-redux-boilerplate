import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Field } from 'redux-form'
import { formEnhancer, Props } from '../enhancers/Form'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label} floatingLabelText={label} errorText={touched && error} {...input} {...custom} />
)

const FormFields: React.SFC<Props> = () => {
  return (
    <Card className={'u-mb-24'}>
      <CardContent>
        <Typography>hgoehoge</Typography>
      </CardContent>
      <CardContent>
        <Field component={renderTextField} name="search" type="text" />
        <br />
        <Field component={renderTextField} name="hgoehoge" type="text" />
      </CardContent>
    </Card>
  )
}

export const FormFieldsElement = formEnhancer(FormFields)
