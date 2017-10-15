closeItem = function(){
    var introduction = document.getElementById('introduction');
    introduction.style.opacity = '0';
    setTimeout(function(){introduction.parentNode.removeChild(introduction);}, 500);
  };

var celcius = 1;
var fahrenheit = 33.8;
var fahrenheitInput = document.getElementById('fahrenheitInput');
var celciusInput = document.getElementById('celciusInput');

calculateTemp = function() {
  celciusInput.value = fahrenheitInput.value / 2.0149;
}
