import * as React from 'react'
import { withRouter } from 'react-router-dom'
import CounterActions from '../organisms/CounterActions'
import StateSample from '../organisms/StateSample'
import FormFields from '../organisms/FormFields'
import { Helmet } from 'react-helmet'
import { whyDidYouUpdate } from 'why-did-you-update'
import { Field } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import { reduxForm, InjectedFormProps } from 'redux-form'

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label} floatingLabelText={label} errorText={touched && error} {...input} {...custom} />
)

type Props = {}

whyDidYouUpdate(React)

type AllFormProps = Props & InjectedFormProps<FormData, Props>

const Home: React.SFC<AllFormProps> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>title</title>
      </Helmet>
      <CounterActions />
      <StateSample />
      <FormFields />
    </React.Fragment>
  )
}

const hoge = reduxForm<{}, Props>({
  form: 'searchForm'
})(Home)

export default withRouter<any>(hoge)
