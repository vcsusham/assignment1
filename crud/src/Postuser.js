import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    name: '',
    job:''
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
    [name]: value
  });

  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      job : this.state.job
    };

    axios.post(`https://reqres.in/api/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
            Person job:
            <input type="text" name="job" value={this.state.job} onChange={this.handleChange} />
          </label>
          <br/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}