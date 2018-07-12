
function LengthConverter(valNum) {
  document.getElementById("outputMeters").innerHTML=valNum/3.2808;
}

function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
}