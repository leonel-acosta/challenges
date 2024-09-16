console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  const newMessage = document.createElement("li");
  newMessage.classList.add("toast-container__message");
  newMessage.innerHTML =`
    <p>New Message</p>`;
  toastContainer.append(newMessage);
  console.log("New message added")
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML =`
    `;
  console.log("Clear messages")
});
