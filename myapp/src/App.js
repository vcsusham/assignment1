
import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import axios from 'axios';


import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import listpizza from './listpizza.js';
import './App.css';
import './SignUp.css';
import './Login.css';

const App=()=>(
        
         <Router>
           <div class="Appdiv"> 
               <h2>Welcome to Dominos</h2>
               
                  <Link to={'/'}>Home</Link>
                  <Link to={'/Login'}>Login</Link>
                  <Link to={'/SignUp'}>SignUp</Link>
                  <Link to={'/listpizza'}></Link>
               
               <hr />
                  <Route exact path='/' component={Home} />
                  <Route path='/Login' component={Login} />
                  <Route path='/SignUp' component={SignUp} />
                  <Route path='/listpizza' component={listpizza} />
         </div>
         </Router>
      )
   
export default App;