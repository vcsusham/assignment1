import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-dom';
import { Link, withRouter } from "react-router-dom";



class CreateInvoice extends Component{

  
   constructor(props) {
    super(props);
    localStorage.formData = '';
    this.state = {
       serialnumber:'',
       invoicenumber:'',
       clientname:'',
       grandtotal:'',
       date:'',
       action:''

    }
  }

  handleSubmit = () => {
    console.log('inside handleSubmit', this.state);
    const {serialnumber,invoicenumber,clientname,grandtotal,date,action} = this.state;
    if(!serialnumber) {
      this.setState({
        serialnumberError: 'enter the serial number'
      })
    }
    if(!invoicenumber) {
      this.setState({
        invoicenumberError: 'enter the Invoice number'
      })
    }
    if(!clientname) {
      this.setState({
        clientnameError: 'enter the client Name'
      })
    }
   
    if(!grandtotal){
      this.setState({
        grandtotalError: 'enter the Grand Total'
      })
    }
    if(!date){
      this.setState({
        dateError: 'enter the date'
      })
    }
    if(!action){
      this.setState({
        actionError: 'enter the action'
      })
    }
   
    if(serialnumber && invoicenumber && clientname && grandtotal && date && action ){
        let userDatabase = localStorage.userDatabase ? JSON.parse(localStorage.userDatabase) : [];
        userDatabase.push(this.state);
        localStorage.userDatabase = JSON.stringify(userDatabase);
        this.props.history.push("/App");

        
      }
       }

  
  setSerialNumber = (e) => {
    console.log(e, e.target.value);
    this.setState({
      serialnumber: e.target.value
    })
  }
  setInvoiceNumber = (e) => {
    console.log(e, e.target.value);
    this.setState({
      invoicenumber: e.target.value
    })
  }
    


  setClientName = (e) => {
    console.log(e, e.target.value);
    this.setState({
      clientname: e.target.value
    })
  }
  

  setGrandTotal = (e) => {
    console.log(e, e.target.value);
    this.setState({
      grandtotal: e.target.value
    })
    
  }
  setDate = (e) => {
    console.log(e, e.target.value);
    this.setState({
      date: e.target.value
    })
    
  }
  setAction = (e) => {
    console.log(e, e.target.value);
    this.setState({
      action: e.target.value
    })
    
  }
  render() {
    const {serialnumberError,invoicenumberError,serialnumber,invoicenumber} = this.state;
    const{clientnameError,clientname }= this.state;
    const{grandtotalError,grandtotal }= this.state;
    
    const{dateError,date }= this.state;
    const{actionError,action }= this.state;

    return (
      <div className="App">
        <h1>New Invoice</h1>
         <div className="row" id="sno">
          <label name="Serial Number">Serial Number</label>
            <input type="text" value={serialnumber} onChange={this.setSerialNumber}/>
            <div className="error">{serialnumberError}
            </div>
          </div>
          <div className="row" id="invoicenumber">
          <label name="Invoice Number">Invoice Number</label>
            <input type="text" value={invoicenumber} onChange={this.setInvoiceNumber}/>
            <div className="error">{invoicenumberError}
            </div>
          </div>
        <div className="row" id="clientname">
          <label name="Client Name">Client Name</label>
          <input type="text" value={clientname} onChange={this.setClientName}/>
             <div className="error">{clientnameError}
             </div>
         </div>
         <div className="row" id="grandtotal">
          <label name="GrandTotal">Grand Total</label>
          <input type="text" value={grandtotal} onChange={this.setGrandTotal}/>
             <div className="error">{grandtotalError}
             </div>
         </div>
         <div className="row" id="date">
          <label name="Date">Date</label>
          <input type="date" value={date} onChange={this.setDate}/>
             <div className="error">{dateError}
             </div>
         </div>
         <div className="row" id="action">
          <label name="Action">Action</label>
          <input type="text" value={action} onChange={this.setAction}/>
             <div className="error">{actionError}
             </div>
         </div>

      
        <div className="row">
          <button onClick={this.handleSubmit} id="submit" name="subject"  value="submit">Submit</button>
        </div>
        
        {
          localStorage.formData && <div>Form Data:  
          {JSON.parse(localStorage.formData).serialnumber} 
          {JSON.parse(localStorage.formData).invoicenumber} 
          {JSON.parse(localStorage.formData).clientname} 
          {JSON.parse(localStorage.formData).grandtotal} 
          {JSON.parse(localStorage.formData).date} 
          {JSON.parse(localStorage.formData).action}
          </div>
        }
       
  </div>

    );
  }
}
  export default withRouter(CreateInvoice);