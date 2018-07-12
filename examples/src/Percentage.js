import React from 'react';


class Percentage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			c:0
		}
		this.percentage = this.percentage.bind(this);
	}

     percentage () {
	const c=this.state;
     
		var a=400;
		var b=500;
     	this.setState({c:(a/b*100)});
     	
}
	render(){
	console.log(this.state.c);
	
      return(
      	<div>
      	<form className="input">
      	<label>
      	A:
      	<input type="text" value={this.state.value} onChange={this.handleChange} />
      	</label>
     
      </div>
      );
	}
}
export default Percentage;