import React, { Component } from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={obj:'',types:'',rules:''};
 var obj = {
     length: {
      types: {
        km : "Kilometer", 
        m :  "Meter", 
        cm : "Centimeter"
        },
         rules: {
          kmtom : "* 1000",
          kmtocm : "* 100000",
          mtocm : "* 100",
          mtokm : "/ 1000",
          cmtokm : "/ 100000",
          cmtom : "/ 100"
        }
    },
    time: {
      types:{
      hour :"Hour",
      min :"Minute",
      sec : "Second" 
    },
      rules : {
        hourtomin : "* 60 ",
        hourtosec : "* 3600 ",
        sectohour : "/ 3600",
        sectomin  : "/ 60",
        mintohour : "/ 60",
        mintosec  : "* 60"
      }
   },
   speed : {
    types : {
      kph : "kph",
      mph : "mph",
      knots : "Knots"
     },
      rules : {
        kphtomph   : "/ 1.609344",
        kphtoknots : "/ 1.852",
        mphtokph   : "* 1.609344 ",
        mphtoknots : "/ 1.150779",
        knotstokph : "* 1.852",
        knotstomph : "* 1.150779"
      }
    },
    currency : {
    types : {
      usd : "usdollar",
      pound : "britishpound",
      inr : "indianrupee"
    },
      rules : {
        usdtoinr   : "* 68.93",
        usdtopound : "/ 1.32",
        poundtousd : "* 1.32 ",
        poundtoinr : "* 91.19 ",
        inrtousd   : "/ 68.93",
        inrtopound : "/ 91.19"
      }
    },
       volume : {
        types : {
          ltr     : "litre",
          ml      : "millilitre",
          gallon  : "gallon"
        },
          rules : {
            ltrtoml      : "* 1000",
            ltrtogallon  : "/ 3.78541",
            mltoltr      : "/ 1000",
            mltogallon   : "/ 3785.41 ",
            gallontoltr  : "* 3.78541",
            gallontoml   : "* 3785.41"
         }
      },
    }
 }
  
  showSubOption() {
    var options = '';
    var types = this.obj[document.getElementById('mainOptions').value].types;
    for (var i in types) {
        options += '<option>'+types[i] + '-' + i +'</option>';
    }
    document.getElementById('fromOptions').innerHTML = options;
    document.getElementById('toOptions').innerHTML = options;
  }

  convert() {
    var optionSelected = document.getElementById('mainOptions').value;
    var fromSelected = document.getElementById('fromOptions').value;
    var toSelected = document.getElementById('toOptions').value;
    var fromValue = document.getElementById('from').value;
    console.log(optionSelected, fromSelected, toSelected, fromValue);
    if (fromSelected === toSelected) {
        document.getElementById('to').value = document.getElementById('from').value;
        return;
    }
    if (fromValue) {
        var formulae = fromSelected.split('-')[1] + 'to' + toSelected.split('-')[1];
        console.log(this.obj, optionSelected, formulae);
        var finalFormulae = this.obj[optionSelected].rules[formulae];
        console.log(finalFormulae);
        document.getElementById('to').value = eval(fromValue + finalFormulae)
    }
  }

    render(){
      return(

        <div className="Converter">
       <h1>Unit Converter</h1>
    <h3>Please select the unit you want to convert</h3>
    <div className="converter">
      <select id="mainOptions" onChange={this.showSubOption}>
        <option>length</option>
        <option>time</option>
        <option>speed</option>
        <option>currency</option>
        <option>volume</option>
       </select>
         <div className="suboptions">
            <div className="from">
              <select id="fromOptions" >
                </select>
                  <input type="text" id="from" />
            </div>
              <div className="to">
                <select id="toOptions">
                </select>
                  <input type="text" id="to"/>
            </div>
            <button onClick={this.convert}>Convert</button>
        </div>
      </div>
      </div>

      )
    
  }
}

export default App;
