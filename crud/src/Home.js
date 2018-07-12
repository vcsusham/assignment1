import React from 'react';
import './App.css';
import { BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import Login from './Login.js';
import Signup from './Signup.js';
import Getuser from './Getuser.js';

export default class Frontpage extends React.Component{
 render(){
  return(
    <div>
	  <Router>
		<div>
		 <header className='header'>
		   <Link to='/Login'>Login</Link><br/>
		   <Link to='/Signup'>Signup</Link><br/>
		 </header>

		  <Route path='/Login' component={Login} />
		  <Route path='/Signup' component={Signup} />
		  <Route path='/user' component={Getuser}/> 
		</div>
		 </Router>
        <p></p>
		  <footer className='footer'>
		    <p>This is footer</p>
		  </footer>
	</div>
  );
	}
}