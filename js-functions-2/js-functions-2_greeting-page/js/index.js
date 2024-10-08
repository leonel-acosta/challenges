console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

let date = new Date().getDay()
const time = new Date().getHours()

function getGreeting() {
  // Code here
    if( time >= 6 && time <= 12){
      return "Good Morning"
    }
    if (time >= 13 && time <= 18){
      return "Good Afternoon"
    }
    if (time >= 19 && time <= 22){
      return "Good Evening"
    }
    else {return "Good Night"}
}
getGreeting()

function getDayColor(date) {
  if( date === 1){return "darkgray"}
  else if (date === 2 || date === 6){return "lightblue"}
  else if (date === 7 || date === 1 ){return "hotpink"}
}

//date como un array / objeto

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
