import React, {useState } from 'react'
import FormComponent from '../_Form/FormComponent'
import { Container } from './styles'

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState<boolean>(false)

  const handleSuccess:React.FormEventHandler = () => {
    setShowSuccess(true)
  }

  return (
    <Container>
      {showSuccess ? (
        <>
          <h3>40 Days to GO!</h3>
          <p>It's almost time for a tapioca.</p>
        </>
      ) : (
          <>
            <h3>Sign up</h3>
            <p>See how many days are left to take off and go to Brazil!</p>
            <FormComponent handleSuccess={handleSuccess}/>
          </>
        )
      }
      
    </Container>
  )
}

export default ModalInner