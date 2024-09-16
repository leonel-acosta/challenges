console.clear();

const form = document.querySelector('[data-js="form"]');

const a = parseInt(document.querySelector('#number-a').value);
const b = parseInt(document.querySelector('#number-b').value);
const addition = document.querySelector('#addition');
const subtraction = document.querySelector('#substraction');
const multiplication = document.querySelector('#multiplication');
const division = document.querySelector('#division');

const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  if (event.target.addition.checked === true){ 
    result = add(a, b)
    console.log("Result:",add(a, b))
  }  
  if (event.target.subtraction.checked === true){ 
    result = subtract(a, b)
    console.log("Result:",subtract(a, b))
  }
  if (event.target.multiplication.checked === true){ 
    result = multiply(a, b)
    console.log("Result:",multiply(a, b))
  }
  if (event.target.division.checked === true){ 
    result = divide(a, b)
    console.log("Result:", divide(a, b))
  }  

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
