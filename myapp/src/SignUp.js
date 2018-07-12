import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-dom';
import { Link, withRouter } from "react-router-dom";



class SignUp extends Component{

  
   constructor(props) {
    super(props);
    localStorage.formData = '';
    this.state = {
     fname:'',
     lname:'',
      email:'',
      password:'',

    }
  }

  handleSubmit = () => {
    console.log('inside handleSubmit', this.state);
    const {fname,lname,email, password} = this.state;
    if(!fname) {
      this.setState({
        fnameError: 'enter your first name'
      })
    }
    if(!lname) {
      this.setState({
        lnameError: 'enter your last name'
      })
    }
    if(!email) {
      this.setState({
        emailError: 'enter your email'
      })
    }
    if(!password){
      this.setState({
        passwordError: 'enter your password'
      })
    }
    if(fname && lname && email && password){
        let userDatabase = localStorage.userDatabase ? JSON.parse(localStorage.userDatabase) : [];
        userDatabase.push(this.state);
        localStorage.userDatabase = JSON.stringify(userDatabase);
        this.props.history.push("/login");
      }
  

    }
  
  setFirstName = (e) => {
    console.log(e, e.target.value);
    this.setState({
      fname: e.target.value
    })
  }
  setLastName = (e) => {
    console.log(e, e.target.value);
    this.setState({
      lname: e.target.value
    })
  }
  
  setEmail = (e) => {
    console.log(e, e.target.value);
    this.setState({
      email: e.target.value
    })
  }
  
  setPassword = (e) => {
    console.log(e, e.target.value);
    this.setState({
      password: e.target.value
    })
    
  }

  render() {
    const { emailError,passwordError,email,password} = this.state;
    const{fnameError,fname }= this.state;
    const{lnameError,lname }= this.state;

    return (
      <div className="App">
        <h1>SignUp</h1>
         <div className="row" id="fname">
          <label name="First Name">First Name:</label>
            <input type="text" value={fname} onChange={this.setFirstName}/>
            <div className="error">{fnameError}
            </div>
          </div>
          <div className="row" id="lname">
          <label name="Last Name">Last Name:</label>
            <input type="text" value={lname} onChange={this.setLastName}/>
            <div className="error">{lnameError}
            </div>
          </div>
        <div className="row" id="email">
          <label name="Email">Email:</label>
          <input type="text" value={email} onChange={this.setEmail}/>
             <div className="error">{emailError}
             </div>
         </div>
         <div className="row" id="password">
          <label name="Email">Password:</label>
          <input type="password" value={password} onChange={this.setPassword}/>
             <div className="error">{passwordError}
             </div>
         </div>
      
        <div className="row">
          <button onClick={this.handleSubmit} id="submit" name="subject"  value="submit">Submit</button>
        </div>
        {
          localStorage.formData && <div>Form Data: First Name: 
          {JSON.parse(localStorage.formData).fname} Last Name:
          {JSON.parse(localStorage.formData).lname} Email :
          {JSON.parse(localStorage.formData).email} Password :
          {JSON.parse(localStorage.formData).password}</div>
        }
       
  </div>

    );
  }
}
  export default withRouter(SignUp);