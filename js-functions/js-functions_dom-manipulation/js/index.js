let box = document.querySelector("[data-js=box]");
const redButton = document.querySelector("[data-js=js-red-button]");
const greenButton = document.querySelector("[data-js=js-green-button]");
const blueButton = document.querySelector("[data-js=js-blue-button]");
const grayButton = document.querySelector("[data-js=js-gray-button]");

/*
We want to add some functionality to the buttons on this page. When pressing a button, 
the corresponding color should be applied to the box.
  1: Create a function removeAllColors which removes all color classes from the box.
  2: Create a function addColor which takes a class name as a parameter and adds the 
  class to the box.
  3: Use the two functions in the event listeners of the buttons to color in the box
   when the button is clicked.
*/

redButton.addEventListener("click", () => {
  // use your functions to
  // - remove all classes
  // - then add the class name: "red"
  removeAllColors(),
  addColor("red")
  console.log("Red added")
});

blueButton.addEventListener("click", () => {
  // use your functions to
  // - remove all classes
  // - then add the class name: "blue"
  removeAllColors(),
  addColor("blue")
  console.log("Blue added")

});

greenButton.addEventListener("click", () => {
  // use your functions to
  // - remove all classes
  // - then add the class name: "green"
  removeAllColors(),
  addColor("green")
  console.log("Green added")
});

grayButton.addEventListener("click", () => {
  // use your functions to
  // - remove all classes
  // - then add the class name: "gray"
  removeAllColors(),
  addColor("gray")
  console.log("Gray added")
});

// Write your two functions below:

const color = ["red", "green", "blue", "gray"]

function removeAllColors(){
  box.classList = "box"
  console.log("All color classes removed from the box")
}

function addColor(color){
  box.classList.add(color)
  console.log(color, "color class added to box")
}