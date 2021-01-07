//Click the button to display your name
const myName = document.querySelector("#myName");
const btnName = document.querySelector("#btnName");

// event is click
// eventlistner on what element? on the button
btnName.addEventListener("click",displayName);

function displayName(){
  myName.value = "Lavina";
}

//Switch lights on mouse over
