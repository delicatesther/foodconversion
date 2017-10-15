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

calculateRebelWeight = function() {
  var kilo = poundInput.value * 0.45359237;
  var gram = poundInput.value * 453.59237;
  var kiloB = ounceInput.value *0.02834952;

  fillInput('kiloInput', kilo);
  fillInput('kiloInput', kiloB);
  fillInput('gramInput', gram);

}
