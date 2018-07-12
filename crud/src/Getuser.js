import React from 'react';
import axios from 'axios';

class Getuser extends React.Component{
  state={
    data :[],
    name:"",
    job:"",
    showCreateForm: false,
    showEditUserForm: false,
    page:1
  };
  componentDidMount() { 
    this.createUser = this.createUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.sendPaginationPrev = this.sendPaginationPrev.bind(this);
    this.sendPaginationNext = this.sendPaginationNext.bind(this);
    this.getUsersPage = this.getUsersPage.bind(this);
    this.getUsersPage();
  }

  getUsersPage = event => {
    axios.get('https://reqres.in/api/users?page=' + this.state.page)
    .then (res => {
      console.log (res);
      this.setState({data : res.data.data});
    });
  }
  onChange = (event) => {
      this.setState({[event.target.name]:event.target.value});
  }

  createUserForm = event => {
    event.preventDefault();
    axios.post('https://reqres.in/api/users',{
      name: this.state.name,
      job: this.state.job
    },{
      Method:'post',
      headers: {
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
      }
    })
    .then( res => {
      if(res.status === 201) {
        console.log('user', res);
      }
      this.setState({
        showCreateForm : false,
        user: '',
        name: '',
        job: ''
      })
    });
  }

  createUser = event => {
      this.setState({showCreateForm: true});
  }

  editUserForm = user => {
    user.preventDefault();
    axios.put('https://reqres.in/api/users/2' + this.state.user.id, {
      name: this.state.name,
      job: this.state.job
    },{
      Method:'put',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    .then(res =>{
      if(res.status === 200) {
        console.log('user', res);
      }
      this.setState({
        showEditUserForm : false,
        user: '',
        name: '',
        job: ''
      })
    });
  }

  editUser = user =>  {
    console.log('edit called', user);
    this.setState({showEditUserForm: true, user: user, name: user.first_name, job: user.job})
  }

  sendPaginationPrev = event => {
    const { page } = this.state;
    if(page > 1) {
      this.setState({
        page: page - 1
      }, function() {
        this.getUsersPage();
      })
    }
  }

  sendPaginationNext = event => {
    const { page } = this.state;
    this.setState({
      page: page + 1
    }, function() {
      this.getUsersPage( page );
    })
  }

  deleteUser = user => {
    {if(window.confirm('Delete the item?')) {this.deleteItem};}
    axios.delete('https://reqres.in/api/users/2' + user.id, {
    },{
      Method:'delete',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    .then(res=>{
      if(res.status === 204) {
        console.log('user', res);
      }
    });
  }

  render(){
    const { data, showCreateForm, showEditUserForm } = this.state;
    return(
      <div>
        <ul> 
        {data.map(user => 
          <span key = { user.id } > 
            <img src = { user.avatar} />
            <li key={user.id}>{user.first_name}</li> 
            <li onClick = {() => this.editUser(user)} > Edit User </li>
            <li onClick={() => this.deleteUser(user)}>Delete User</li> 
          </span>
        )}
        <div onClick={this.createUser}> Create User</div>
        </ul>
        <div className="pagination">
          <a onClick={this.sendPaginationPrev}>Prev</a>
          <a onClick={this.sendPaginationNext}>Next</a>
        </div>
        { showCreateForm && 
          <div>
            <div className=''>
              <center>
                <h2>Create</h2>
                <form className="form2" onSubmit= {this.createUserForm} >
                  <p>
                    <label>Name:</label>
                    <input type="text" name="name" value= {this.state.name} onChange={this.onChange} required />
                  </p>
                  <p>
                    <label>Job:</label>
                    <input type="text" name="job" value= {this.state.job} onChange={this.onChange} required />
                  </p>
                  <input type="submit" value="Submit" />
                </form>
              </center> 
            </div>
          </div>
        }
        {showEditUserForm &&
          <div >
            <div className=''>
              <center>
                <h2>Edit</h2>
                <form className="form2" onSubmit= {this.editUserForm} >
                  <p>
                    <label>Name:</label>
                    <input type="text" name="name" value= {this.state.name} onChange={this.onChange} required />
                  </p>
                  <p>
                    <label>Job:</label>
                    <input type="text" name="job" value= {this.state.job} onChange={this.onChange} required />
                  </p>
                  <input type="submit" value="Submit" />
                </form>
              </center> 
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Getuser;