console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

function showWelcomeMessage() {
  console.log("Welcome")
}

// Call handleUserLogin below!
handleUserLogin(showWelcomeMessage)

handleUserLogin( function(){
  console.log("Welcome 2")}
)