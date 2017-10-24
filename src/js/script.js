closeItem = function(){
    var introduction = document.getElementById('introduction');
    introduction.style.opacity = '0';
    setTimeout(function(){introduction.parentNode.removeChild(introduction);}, 500);
  };

var fahrenheitInput = document.getElementById('fahrenheitInput');
var celciusInput    = document.getElementById('celciusInput');
var poundInput      = document.getElementById('poundInput');
var ounceInput      = document.getElementById('ounceInput');
var kiloInput       = document.getElementById('kiloInput');
var gramInput       = document.getElementById('gramInput');

fillInput = function(x, y) {
  document.getElementById(x).value = Math.round(y * 100) / 100;
}
calculateCelcius = function() {
  var celcius  = (fahrenheitInput.value - 32) * (5/9);
  fillInput('celciusInput', celcius);
}

calculateFahrenheit = function() {
  var fahrenheit  = celciusInput.value * 1.8 + 32;
  fillInput('fahrenheitInput', fahrenheit);
}

calculateWeight = function(x, y) {
  if (isNaN(y)) {
    alert("Please enter a number");
  }
  switch(x) {
    case  "ounceInput":
      fillInput('gramInput', y * 28.34952);
      fillInput('kiloInput', y * 0.02834952);
      fillInput('poundInput', y / 16);
      break;
    case  "poundInput":
      fillInput('gramInput', y * 453.59237);
      fillInput('kiloInput', y * 0.45359237);
      fillInput('ounceInput', y * 16);
      break;
    case  "kiloInput":
      fillInput('gramInput', y * 1000);
      fillInput('poundInput', y / 0.45359237);
      fillInput('ounceInput', y / 0.02834952);
      break;
    case  "gramInput":
      fillInput('kiloInput', y / 1000);
      fillInput('poundInput', y / 453.59237);
      fillInput('ounceInput', y * 28.34952);
      break;
    default:
      alert("Please enter a number");
  }
}
calculateCups = function() {

}
