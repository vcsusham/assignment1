import React, {Component} from 'react';

class abc extends component{
	constructor(props){

	super(props);
	this.state={
		title= 'Simple CRUD app'
		act: 0,
		index:'',
		datas=[]
	}
}  


componentDidMount()
{
	this.refs.name.focus();
}
fsubmit = (e) =>
{
	e.preventDefault();
	console.log('try');

	let datas=this.state.datas;
	let email=this.refs.email.value;
	let password=this.refs.password.value;


	let data={
		email,password
	}
	datas.push(data);
}


render(){
	return(
		<div className="abc">
		<h2>{this.state.title}</h2>
		<form ref="myform" className="myform">
		<input type="text" ref="email" placeholder "Please enter your email" className="formfield"/>
		<input type="password" ref="password" placeholder "Please enter your password" className="formfield"/>
	    <button onClick={(e)=>this.fsubmit(e)} className"myButton">Submit</button>
	    </form>


		)
}
