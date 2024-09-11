console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

hideTosError();

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data)

  if (event.target.tos.checked === false){
    event.target.tos.focus;
    showTosError()
    console.log("TOS unchecked")
    return; 
  } 


  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
alert("Form submitted");
});
