import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from 'axios'
import FormRange from 'react-bootstrap/esm/FormRange';

const RegisterForm = () => {
  
  const [formValue, setformValue] = React.useState({
      firstName: '',
      lastName: '',
    emailId: '',
    username: '',
    password: ''
  });



  const handleSubmit = async() => {
    // store the states in the form data
    const regFormData = new FormData();
    //loginFormData.append("id", formValue.id)
    //loginFormData.append("name", formValue.name)
  
    var d = {
        "firstName": formValue.firstName,
        "lastName": FormRange.lastName,
      "emailId": formValue.emailId,
      "username": formValue.username,
      "password": formValue.password,
    };
    var jd = JSON.stringify(d);
  
    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: " https://1j75j35gpf.execute-api.us-east-2.amazonaws.com/default/dynamoDbFunction",
        data: jd,
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch(error) {
      console.log(error)
    }
    }
    const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
    }
  return (
    <div >
      <Form onSubmit={handleSubmit} style = {{marginLeft:"300px",marginRight:"300px"}}>
        <FormGroup className="mt-5">
          <Label>
              
            <h3 style = {{marginLeft:"200px",marginRight:"200px"}}>Register here!</h3>
          </Label>
        </FormGroup>
        <div className="text-center">
          <FormGroup >
            <Label for="registerFirstName">First name</Label>
            <Input
              tabIndex={1}
              type="text"
              name="firstName"
              id="registerFirstName"
              value={formValue.firstName}
              onChange={handleChange}
              
            />
          </FormGroup>
          <FormGroup>
            <Label for="registerLastName">Last Name</Label>
            <Input
              tabIndex={2}
              type="text"
              name="lastName"
              id="registerLastName"
              value={formValue.lastName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="registerEmail">Email</Label>
            <Input
              tabIndex={4}
              type="email"
              name="emailId"
              id="registerEmail"
              value={formValue.emailId}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="registerUserNmae">Username</Label>
            <Input
              tabIndex={4}
              type="text"
              name="userName"
              id="registerUserName"
              value={formValue.userName}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="registerPassword">Password</Label>
            <Input
              tabIndex={5}
              type="password"
              name="password"
              id="registerPassword"
              value={formValue.password}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="text-center">
           
          </FormGroup>
          <FormGroup className="text-center col-12 d-flex flex flex-column align-items-center">
          <button type="submit">Register Now!</button>
            <NavLink>
              <a href="login">Click Login</a>
            </NavLink>
          </FormGroup>
        </div>
      </Form>
    </div>
  );
};

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  removeMessage: PropTypes.func.isRequired
};

export default RegisterForm;
