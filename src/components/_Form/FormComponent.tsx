import React from 'react'
import * as Yup from 'yup'
import { Formik,  Form, Field } from 'formik'


interface _SubmitProps {
  // handleSuccess: React.FormEventHandler;
  handleSuccess: (values: _InitValues) => void; 
}

interface _InitValues {
  name: string;
  email: string
}

const FormComponent = ({ handleSuccess }: _SubmitProps) => {

  const initialValues:_InitValues = {name: "", email: ""};
  const schema = Yup.object().shape({
    name: Yup.string().required('Required fields as a string'),
    email: Yup.string().email('Must a valid email address').required('Required field')
  })
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSuccess} 
      validationSchema={schema}
      >
      <Form>
        <label>Name:</label>
        <Field type="text" name='name' autoComplete='off' />

        <label>Email address:</label>
        <Field type="email" name='email' autoComplete='off' />

        <button type="submit" >Submit</button>
      </Form>
    </Formik>
  )
}

export default FormComponent