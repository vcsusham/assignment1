import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import { Link, withRouter } from "react-router-dom";



class Login extends Component {

   constructor(props) {
    super(props);
    localStorage.formData = '';
    this.state = {
      email:'',
      password:'',
      error: ''
    }
  }

  handleSubmit = () => {
    const {email, password} = this.state;
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
    if(email && password) {
      const db = JSON.parse(localStorage.userDatabase);
      const isLogin = false;
      console.log(db);
      for (var i = 0; i< db.length; i++) {
        console.log(db[i]);
        if(db[i].email == email && db[i].password == password) {
          this.props.history.push("/listpizza");
        }
      }
      this.setState({
        error: 'Please provide correct details'
      })
         
    }
    
       
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
    const { emailError,passwordError,email,password, error} = this.state;
    return (
      <div className="App">
        <h1>Login</h1>

       
        <div className="row" id="email">
          <label name="Email">Email:</label>
          <input type="text" value={email} onChange={this.setEmail}/>
             <div className="error">{emailError}
             </div>
         </div>
         <div className="row" id="email">
          <label name="Email">Password:</label>
          <input type="password" value={password} onChange={this.setPassword}/>
             <div className="error">{passwordError}
             </div>
         </div>

         <div className="error">{error}</div>
      
        <div className="row">
          <button onClick={this.handleSubmit} id="submit" name="subject"  value="submit">Submit</button>
        </div>
        {
          localStorage.formData && <div>Form Data:Email: 
          {JSON.parse(localStorage.formData).email} Password :
          {JSON.parse(localStorage.formData).password}</div>
        }
       
  </div>

    );
  }
}
export default withRouter(Login);