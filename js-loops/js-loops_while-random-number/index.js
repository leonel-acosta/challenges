console.clear();

// `while` loop

let number = 0;
let count = 10;

// --v-- write/change code here --v--

while (number <= 0.9){
  number = Math.random();
  count ++
  console.log(number)
}
// --^-- write/change code here --^--

console.log(
  `The number that ended the loop was ${number} and it took ${count} rounds to do this!`
);
