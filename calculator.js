var numFieldOne = document.getElementById('numFieldOne');
var numFieldTwo = document.getElementById('numFieldTwo');
var resultField = document.getElementById('resultField');
var thisForm = document.getElementById('xIsWhatPercentOfY');

thisForm.addEventListener('submit', function(event) {
  if (!numFieldOne.value || !numFieldTwo.value) {
    alert('Please enter valid values in both fields!');
  } else {
    //convert strings to numbers
    var x = parseFloat(numFieldOne.value);
    var y = parseFloat(numFieldTwo.value);

    var result = x / y;
    var percent = result * 100;

    if (isNaN(percent)) {
      alert('Please enter valid values in both fields!');
    }

    resultField.innerText = 'Answer: ' + percent.toFixed(1) + '%';
    event.preventDefault();
  }
});
