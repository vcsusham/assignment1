
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

  function showSubOption() {
    var options = '';
    var types = obj[document.getElementById('mainOptions').value].types;
    for (var i in types) {
        options += '<option>'+types[i] + '-' + i +'</option>';
    }
    document.getElementById('fromOptions').innerHTML = options;
    document.getElementById('toOptions').innerHTML = options;
  }

  function convert() {
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
        console.log(obj, optionSelected, formulae);
        var finalFormulae = obj[optionSelected].rules[formulae];
        console.log(finalFormulae);
        document.getElementById('to').value = eval(fromValue + finalFormulae)
    }
  }
    showSubOption("length");