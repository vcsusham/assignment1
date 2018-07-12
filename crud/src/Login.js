import React from 'react';
import './App.css';
import axios from 'axios';

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
     email:"",
     password:""
    };

      this.onChange = this.onChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event){
    this.setState({[event.target.name]:event.target.value});
  }

  handleSubmit= event =>{
    event.preventDefault();

    const user ={ 
      email:this.state.email,
      password:this.state.password
    
    };
    axios.post('https://reqres.in/api/login',user,{
      Method:'post',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    .then(res =>{
      console.log(res);
      console.log(res.data.data);
    });
     this.props.history.push('/user')
  };

  render() {
    console.log(this.state);
    return (
            <div className=''>
        <center>
          <h2>Login</h2>
            <form className="form1" onSubmit={this.handleSubmit}>
                  <p>
                    <label>Email:</label>
                     <input type="email" name="email" value={this.state.value} onChange={this.onChange} required />
                  </p>
                  <p>
                    <label>Password:</label>
                     <input type="password" name="password" value={this.state.value} onChange={this.onChange} required />
                  </p>
                     <input type="submit" value="Submit" />
              </form>
          </center> 
      </div>
    )
  }
}