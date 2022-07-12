import React from "react"
import { Button, Form } from "react-bootstrap"
import FormContainer from "../components/FormContainer"

function LoginScreen() {
  return (
    <FormContainer>
      <h2>Sign In</h2>
      <Form className='form'>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email'></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
          ></Form.Control>
        </Form.Group>
        <Button type='submit' variant='primary' className='signInButton'>
          Sign in
        </Button>
        <Button type='submit' variant='primary' className='signInButtonGoogle'>
          Sign in with Google
        </Button>
      </Form>
    </FormContainer>
  )
}

export default LoginScreen
