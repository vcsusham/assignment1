import React from 'react';

export default class Input extends React.Component{
  constructor(props){
  super(props);
  this.state={
    a:0,
    b:0,
    c:0
  }
  this.handleChange=this.handleChange.bind(this);
  this.percentage=this.percentage.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name] : event.target.value});
    this.setState({[event.target.name]: event.target.value});
    
  }

   percentage (e){
    console.log(this.state.c);
    let x=this.state.a;
    let y=this.state.b;
    console.log(x);
    console.log(y);
    let z = (x/y)*100;   
    this.setState({c : z});
    console.log(z);
    console.log(this.state.c);
    e.preventDefault();
   }
   
   render() {
    return (
      <div>
       <h1></h1>
        <form className="input">
        <label>
        A:
        <input type="text" name="a" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <label>
        B:
        <input type="text" name="b" value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/>
        <button onClick={this.percentage}>Click </button>
        <h1>{this.state.c}</h1>
        </form> 
        </div>
    );
  }
}