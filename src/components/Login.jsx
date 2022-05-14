import axios from 'axios'
import React, {useState} from 'react'
import FormRange from 'react-bootstrap/esm/FormRange';
import { Button, Form, FormGroup, Input, Label, NavLink } from "reactstrap";
const LoginForm = () => {
  
  const [formValue, setformValue] = React.useState({
      firstName: '',
      lastName: '',
    emailId: '',
    username: '',
    password: ''
  });

  const handleSubmit = async() => {
  // store the states in the form data
  const loginFormData = new FormData();
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
    <div>
           
    <head>
      <title>SignUp | By Code Info</title>
      <link rel="stylesheet" href="Css/style.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <div class="login-box">
      <center><h3>Register here!</h3></center>
      <br></br><br></br>
        <form onSubmit={handleSubmit} >
        <center><tr>
        
          <label>First name  </label>
         
         <td>&nbsp;&nbsp;&nbsp;<input type="text" name="firstName" placeholder="" value={formValue.firstName} onChange={handleChange} /></td>
         
         </tr>
         <br></br>
         <tr>
          
          <label>Last name  </label>
          <td>&nbsp;&nbsp;&nbsp;<input type="text" name="lastName"  placeholder="" value={formValue.lastName} onChange={handleChange} /></td>
          
          </tr>
          <br></br>
          <tr>
          
          <label>Email Add</label>
          <td>&nbsp;&nbsp;&nbsp;<input type="text" name="emailId"  placeholder="" value={formValue.emailId} onChange={handleChange} /></td>
          
          </tr>
          <br></br>
          <tr>
          
          <label>Username  </label>
          <td>&nbsp;&nbsp;&nbsp;<input type="text" name="username" placeholder="" value={formValue.username} onChange={handleChange} /></td>
          
          
          </tr>
          <br></br>
          <tr>
          
            
          <label>Password  </label>

          <td>&nbsp;&nbsp;&nbsp;<input type="password" name="password" placeholder="" value={formValue.password} onChange={handleChange}/></td>
          
          </tr>
          <br></br>
          <button type="submit" >Register</button>
          </center>
        </form>
      </div>
      
      <p class="para-2" >
        <center>Not have an account? <a href="signup.html">Sign Up Here</a></center>
      </p>
      
    </body>
          </div>
  )
};


function Login1(){
  

  return (
    <div>
      
      <br/>
      <LoginForm />
    </div>
  );

}
export default Login1;