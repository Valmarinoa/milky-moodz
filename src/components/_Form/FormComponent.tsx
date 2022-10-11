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
      // to use the new schema, we create a new prop
      validationSchema={schema}
      >
        
        {/*  Call on the schema variable to understand if there have been any interactions or errors according to the schema.*/}
        {/* this allows to access the metadat, fielda and the initial values */}
        {({errors, touched}) => (
        <Form>
          <label>Name:</label>
          <Field type="text" name='name' autoComplete='off' />

          {touched.name && errors && <div>{errors.name}</div>}

          <label>Email address:</label>
          <Field type="email" name='email' autoComplete='off' />
          {touched.email && errors && <div>{errors.name}</div>}

          <button type="submit" >Submit</button>
        </Form>
        )}
      
    </Formik>
  )
}

export default FormComponent