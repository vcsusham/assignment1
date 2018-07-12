import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';




class listpizza extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      data: []
    }  
  }

  componentWillMount() {
    console.log('componentWillMount called');
    
    let url = 'https://www.dominos.co.id/infdominos/api/getlistpizza';
    const token = 'lER2MLyGC6Go3rNdE7diPVf0umanUuTf8KhVwPB9ViyZJldnsqFhmViQisdcW6s4';
    axios.get(url, {
      method: 'get',
      headers: {
        'token': token,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    }).then( response => {
        console.log('response from api');
        console.log(response);      
        let mainArray = response.data.data;
        this.setState({data:mainArray});
      }
    );
  }

  

  render() {
    return (
      <div>
          { !_.isEmpty(this.state.data) && this.state.data.map((item) => {
            return(
              item.products.map((data, index) => {
                return (
                  <img src={data.thumbnail} key={index}/>
                );
              })
            );
            })
          }
      </div>
    );
  }
}

export default listpizza;
