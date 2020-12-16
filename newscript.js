//Your code goes here
//0. Change the size of h4
let h4 = document.querySelectorAll("h4");
console.log(h4);
for (i = 0; i < h4.length; i++) {
  h4[i].style.fontSize = "1em";
}

// 1. Click the button to display your name
let btnName = document.querySelector("#btnName");
let myName = document.querySelector("#myName");

btnName.addEventListener("click", displayName);

function displayName() {
  //alert("here");
  let msg = "Hello world";
  myName.value = msg;
}

//2. Switch lights on mouseover
let imageOff = document.querySelector("#imageOff");
imageOff.addEventListener("mouseover", switchLigts);

function switchLigts() {
  imageOff.src = "images/lighton.png";
}

//3. Double click to display content
let btndbName = document.querySelector("#btndbName");
let displayPara = document.querySelector("#displayPara");
btndbName.addEventListener("dblclick", displayMsg);
function displayMsg() {
  displayPara.innerHTML = "You double clicked me";
  //alert("here");
  displayPara.style.color = "red";
  //create a new img element
  let newimg = document.createElement("img");
  newimg.src = "images/smileyface.png";
  displayPara.appendChild(newimg);
}

// 4. Traffic Lights

let btnStop = document.querySelector("#btnStop");
// let btnReady = document.querySelector("#btnReady");
// let btnGo = document.querySelector("#btnGo");
let stopDiv = document.querySelector("#stopDiv");
// let readyDiv = document.querySelector("#readyDiv");
// let goDiv = document.querySelector("#goDiv");

btnStop.addEventListener("click", changeLightsRed);
btnReady.addEventListener("click", changeLightsYellow);
btnGo.addEventListener("click", changeLightsGreen);

function changeLightsRed() {
  stopDiv.style.backgroundColor = "red";
  readyDiv.style.backgroundColor = "black";
  goDiv.style.backgroundColor = "black";
}

function changeLightsYellow() {
  readyDiv.style.backgroundColor = "yellow";
  stopDiv.style.backgroundColor = "black";
  goDiv.style.backgroundColor = "black";
}

function changeLightsGreen() {
  goDiv.style.backgroundColor = "green";
  readyDiv.style.backgroundColor = "black";
  stopDiv.style.backgroundColor = "black";
}

//5. Change textbox border colours
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let btn2Name = document.querySelector("#btn2Name");
btn2Name.addEventListener("click", changeColour);

function changeColour() {
  //firstName.style.color = red;
  firstName.style.borderColor = "red";
  lastName.style.borderColor = "green";
}

//6. validate the box [length should be more than 5 characters]
let btnSub2 = document.querySelector("#btnSub2");
let myName2 = document.querySelector("#myName2");
let errMsg = document.querySelector("#errMsg");
btnSub2.addEventListener("click", validateBox);
function validateBox() {
  if (myName2.value == "" && myName2.value.length < 8) {
    errMsg.innerHTML = "Length should be more than 8";
    document.querySelector("#errMsg").style.color = "#ff0000";
    myName2.focus();
  } else {
    errMsg.innerHTML = "All good ";
    document.querySelector("#errMsg").style.color = "#eeeeee";
  }
}

// 7.create a list of hobbies
let hobbyBtn = document.querySelector("#btnHobbies");
hobbyBtn.addEventListener("click", generateList);
function generateList() {
  let hobbiesList = document.querySelector("#hobbies > ul");
  //console.log(hobbiesList);
  for (i = 1; i <= 3; i++) {
    let hobbies = prompt("What are your hobbies");
    let li = document.createElement("li");
    //console.log(hobbies);
    li.innerHTML = hobbies;
    hobbiesList.appendChild(li);
  }
}

// 8. Display a profile card from an object
const profile = {
  name: "Lavina",
  role: "Instructor",
  hobbies: "Swimming, Cycling",
  img: "../images/face.jpg",
};
btnProfile = document.querySelector("#btnProfile");
btnProfile.addEventListener("click", displayProfile);
function displayProfile() {
  for (let property in profile) {
    if (profile.hasOwnProperty(property)) {
      // Do things here
      document.querySelector(
        "#displayCard"
      ).innerHTML = `<div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="${profile.img}" alt="Card image cap">
                    <div class="card-body">
                        <h3 class="card-title">${profile.name}</h3>
                        <p class="card-text">${profile.role}</p>
                        <p class="card-text">${profile.hobbies}</p>
                    </div>
                    </div>`; 
    }
  }
}
