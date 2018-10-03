import * as React from 'react'
import GridCol from 'src/components/atoms/grid/GridCol'
import Grid from 'src/components/atoms/grid/index'
import TextField from '@material-ui/core/TextField'
import { InjectedFormProps, Field, getFormValues } from 'redux-form'
import { connect } from 'react-redux'
import { IStore } from 'src/redux/IStore'
import { compose, lifecycle, HOC, onlyUpdateForKeys } from 'recompose'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label} floatingLabelText={label} errorText={touched && error} {...input} {...custom} />
)

type Props = {}

type AllFormProps = Props & InjectedFormProps<FormData, Props>

const FormFields: React.SFC<AllFormProps> = () => {
  console.log('*****************')
  console.log('HHHHHHHHHHHHHH')
  console.log('*****************')
  return (
    <Grid align={'center'}>
      <GridCol size={8}>
        <h3>hgoehoge</h3>
        <Field component={renderTextField} name="search" type="text" />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Field component={renderTextField} name="hgoehoge" type="text" />
      </GridCol>
    </Grid>
  )
}

const connector = connect((state: IStore) => {
  return {
    formProps: state.form
  }
})

export const enhancer: HOC<Props, {}> = compose(connector)

export default enhancer(FormFields)
