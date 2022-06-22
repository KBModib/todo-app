import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from './Button';

 export default function Login(){

  return (
    <Form className='form'>
      <Form.Group className="mb-3" controlId="Username">
        <Form.Label>Username</Form.Label>
          <Form.Control type="alphanumeric" placeholder="Enter username" className='inputbox'/>
          <Form.Text className="text-muted">
          </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='inputbox'/>
      </Form.Group>
        <Button />
   </Form>
  );
}
