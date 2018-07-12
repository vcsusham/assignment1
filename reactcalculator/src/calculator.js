import React from 'react'; // importing react
import './calculator.css'; //importing css

export default class Calculator extends React.Component{ //creating a subclass calculator
	constructor(props){
	super(props);
	this.onClick=this.onClick.bind(this); // binding onClick event
	//initializing states of variables
	this.state ={operator:['*', '/', '-', '+', '%'],input:'',operatorFlag:false,dotFlag:'',equation:'',result:'',i:''}
	}

  onClick (e) { //onClick event

  console.log(e.target.value);
  var btnText = e.target.value; 
  let inp = this.state.input;
  let eq = this.state.equation;
  let res = this.state.result;
  let opFlag = this.state.operatorFlag;
  let dFlag = this.state.dotFlag;
  let { operator } = this.state;

    if (btnText == 'AC') { // clear the screen
      this.setState({
        input : '',
        operatorFlag : false,
        equation : ''
       })
    }
    else if (btnText == 'C') { // delete one character
	    console.log(inp);
	    this.setState({
	    input : inp.toString().slice(0, inp.length - 1)
        })
    }
     else if (btnText === '.') { // process the dot input
        if (inp.indexOf('.') == -1 || dFlag) { // only one dot is allowed
		          inp += '.';
		            this.setState({
			            input : inp,
			            dotFlag : false
          })
        }
     }

     else if (btnText === '=') { // process the equation when equals button is pressed
        if (operator.indexOf(inp[inp.length - 1]) > -1) {
            inp = inp.slice(0, inp.length - 1);
        }
        console.log(inp);
        eq = inp;
        res = isNaN(Math.round(eval(eq)*1000000)/1000000) ? "Cannot be divided" : Math.round(eval(eq)*1000000)/1000000;
        inp = res;
        opFlag = true;
        this.setState({
          result: res.toString(), input: inp, operatorFlag: opFlag
        })
    }

     else if (operator.indexOf(btnText) > -1) { // process the operator input
        if (opFlag) {
          inp += btnText;
          opFlag = false;
        } else {
            inp = inp.slice(0, inp.length - 1) + btnText;
        }
        this.setState({
          input: inp,
          operatorFlag:opFlag,
          dotFlag: true
        })
    } 
      else {
        if (res !== '' && operator.indexOf(inp[inp.length - 1]) > -1) {
          inp += btnText;
          res = '';
         } 
          else if (res !== '') {
          inp = btnText;
          res = '';
          } 
          else {
            inp += btnText;
          }
        opFlag = true;
        this.setState({
          input: inp,
          result: res,
          operatorFlag: opFlag,
        })
    }
  }

  render(){
    const { input } = this.state;
    return(
	    <div className="calculator">
	      <form name="form" className = "form">
					<input id="textbox" type="textbox" value={input} name="text"/><br/>
					<input id="" type="button" className="btnAC" value="AC" onClick={this.onClick}/>
					<input id="" type="button" className="btn" value="C" onClick={this.onClick}/>
					<input type="button" className="btn" name="btnemp" value="%" onClick={this.onClick}/>
          <br/>
					<input type="button" className="btn" name="btn7" value="7" onClick={this.onClick}/>
					<input type="button" className="btn" name="btn8" value="8" onClick={this.onClick}/>
					<input type="button" className="btn" name="btn9" value="9" onClick={this.onClick}/>
					<input type="button" className="btn" name="btnd" value="/" onClick={this.onClick}/>
          <br/>
					<input type="button" className="btn" name="btn4" value="4" onClick={this.onClick}/>
					<input type="button" className="btn" name="btn5" value="5" onClick={this.onClick}/>
					<input type="button" className="btn" name="btn6" value="6" onClick={this.onClick}/>
					<input type="button" className="btn" name="btnm" value="*" onClick={this.onClick}/>
          <br/>
					<input type="button" className="btn" name="btn1" value="1" onClick={this.onClick}/>
					<input type="button" className="btn" name="btn2" value="2" onClick={this.onClick}/>
					<input type="button" className="btn" name="btn3" value="3" onClick={this.onClick}/>
					<input type="button" className="btn" name="btns" value="-" onClick={this.onClick}/>
          <br/>
					<input type="button" className="btn" name="btndot" value="." onClick={this.onClick}/>
					<input type="button" className="btn" name="btn0" value="0" onClick={this.onClick}/>
					<input type="button" className="btn" name="btneq" value="=" onClick={this.onClick}/>
					<input type="button" className="btn" name="btnadd" value="+" onClick={this.onClick}/>
		  </form>
     </div>

        )
    }
}