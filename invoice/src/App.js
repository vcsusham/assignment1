import React, { Component } from 'react';
import './App.css';
import {Card,Well,CardHeader,Table} from 'reactstrap'
import finalinvoice from './finalinvoice';
import createinvoice from './createinvoice';
import api from './api.js';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';




class App extends Component {
  constructor(props) {
    super(props);

 }

 /*const db = JSON.parse(localStorage.userDatabase);

        for (var i = 0; i < db.length; i++) {
            tr = $('<tr/>');
            tr.append("<td><span>" + db[i].serialnumber + "</span></td>");// editable
            tr.append("<td>" + db[i].invoicenumber + "</td>");
            tr.append("<td><span>" + db[i].clientname + "</span></td>");
            tr.append("<td><span>" + db[i].grandtotal + "</span></td>");
            tr.append("<td><span>" + db[i].date + "</span></td>");
            tr.append("<td><span>" + db[i].action + "</span></td>");
            $('table').append(tr);
        }
*/
  render() {

    return (
      <div className="App">

        <ul>
           <li><a class="active" href="#home">Home</a></li>
           <li><a href="#company">Company</a></li>
           <li><a href="#client">Client</a></li>
           <li><a href="#tax">Tax</a></li>
           <li><a href="#invoice">Invoice</a></li>

        </ul><br/><br/>
        <Card className="card">
          <CardHeader>Invoice</CardHeader>
          </Card>
          <hr class="hr"/>
           <br/>
        
         <Router>
         <div class="Appdiv"> 
         <Link to={'/createinvoice'}>CreateInvoice</Link>
         <Route path='/createinvoice' component={createinvoice} />
         </div>
         </Router>     
           <Table className="table">
        <thead>
          <tr>
            <th>S. NO</th>
            <th>Invoice Number</th>
            <th>Client Name</th>
            <th>Grand Total</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tr>
           <td> </td>
        </tr>   
  
      </Table>

      
           

      
      </div>
    );
  }
}

export default App;


        