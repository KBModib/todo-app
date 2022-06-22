import React from 'react';
import Form from 'react-bootstrap/Form';
import { Component } from 'react';
import Button from './Button';

export default class Registration extends Component {
   userData;
    constructor(props){
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
          firstName: '',
          lastName: '',
          email: '',
          username: '',
          password: ''
      }
    }

  onChangeFirstName(e) {
    this.setState({firstName: e.target.value})
  }
  onChangeLastName(e) {
    this.setState({lastName: e.target.value})
  }
  onChangeEmail(e) {
    this.setState({email: e.target.value})
  }
  onChangeUsername(e) {
    this.setState({username: e.target.value})
  }
  onChangePassword (e) {
    this.setState({password: e.target.value})
  }

  onSubmit(e) {
        e.preventDefault()
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
         username: '',
          password: '',
      });
    }
  

  componentDidUpdate(nextProps, nextState) {
     localStorage.setItem('user', JSON.stringify(nextState));
  }
    
  onSubmit(e) {
     e.preventDefault()
     console.log(this.state.props)
  }
  componentDidMount() {
    this.userData = JSON.parse(localStorage.getItem('user'));
    if (localStorage.getItem('user')) {
        this.setState({
         firstName: this.userData.firstName,
         lastName: this.userData.lastName,
         email: this.userData.email,
         username: this.userData.username,
         password: this.userData.password,
        })
    } 
       else {
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
       username: '',
        password: '',
     })
   }
  }
   
  render () {
  return (
 <Form className='form reg-form' onSubmit={this.onSubmit}>
    <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter First Name" className='firstName inputbox' value={this.state.firstName} onChange={this.onChangeFirstName}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="lastname">
        <Form.Label className="label" placeholder="Enter Last Name">Surname</Form.Label>
        <Form.Control type="text" placeholder="Enter Surname" className='lastName inputbox' value={this.state.lastName} onChange={this.onChangeLastName}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className='email inputbox' value={this.state.email} onChange={this.onChangeEmail}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="alphanumeric" placeholder="Enter Username" className='username inputbox' value={this.state.username} onChange={this.onChangeUsername}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className="password-og inputbox" value={this.state.password} onChange={this.onChangePassword}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" className="password-confirm inputbox"/>
      </Form.Group>
      <Form.Group>
      <Button />
      </Form.Group>
</Form>
  )
  }}
