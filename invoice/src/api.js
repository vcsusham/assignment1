import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';




class Invoiceuser extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      data: []
    }  
  }

  componentWillMount() {
    console.log('componentWillMount called');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
     .then(json => console.log(json))
  }

  

  render() {
    return (
      <div>
          { !_.isEmpty(this.state.data) && this.state.data.map((data) => {
            return(
               <ul>
          {data.map(data => (
            <li key={data.name}>
              {data.name} {data.price}
            </li>
          ))}
        </ul>
                );
              })
        
          }
      </div>
    );
  }
}

export default Invoiceuser;