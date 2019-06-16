import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Button, FormGroup, FormControl, FormLabel  } from "react-bootstrap";
import Axios from "axios";

export default class LoginForm extends React.Component {
  constructor() {
   super()

   let token = localStorage.getItem('token');


 
   this.state = {
    email: '',
    password: '',
    message: '',
    loggedIn: token == null || token == undefined ? false : true
   };

  }
 
   validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    if (!this.validateForm())
    {
        return false;
    }

    let formData = {
        email: this.state.email,
        password: this.state.password
    };
    let self = this;

    Axios.post('https://qa.manna-irrigation.com:8443/omer/api/v2/users/login',formData,
    {
        crossDomain: true,
        dataType: 'json',
    }).then(function(data) {
            localStorage.setItem('token', data.data.user_api_token);
            self.setState({
                message: 'Success!',
                loggedIn: true
            });
            //self.props.history.push('/farms');
        },function(xhr, status, err) {
         //console.error(status, err.toString())
      
         self.setState({
             message: 'Wrong email/password.'
        });
        }
       );
  };
  
  render() {
    if  (this.state.loggedIn) {
        return <Redirect to="/farms"></Redirect>
    }
    return (
      <div className="LoginForm">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <div className='error-msg'>{this.state.message}</div>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
 }