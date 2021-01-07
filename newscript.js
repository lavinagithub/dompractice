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
let btnReady = document.querySelector("#btnReady");
let btnGo = document.querySelector("#btnGo");
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
    //  if (profile.hasOwnProperty(property)) {
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
    // }
  }
}

// Alert keycode on key press

let myKey = document.querySelector("#myKey");
myKey.addEventListener("keydown", alertKey);

function alertKey(e) {
  var char = e.keyCode;
  document.querySelector("#myKeyCode").innerHTML = char;
}

// captcha generator
function generateRandomString(length) {
  var result = "";
  var newcaptcha = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
newcaptcha = generateRandomString(5);

document.querySelector("#myCaptcha").innerHTML = newcaptcha;
let btnCheckCaptcha = document.querySelector("#btnCheckCaptcha");
btnCheckCaptcha.addEventListener("click", matchCaptcha);

function matchCaptcha() {
  if (document.querySelector("#cpatchaTextBox").value == newcaptcha) {
    alert("All good");
  } else {
    alert("Please try again");
  }
}
// Digital clock
const myClock = document.querySelector("#myClock");

function showTime() {
  var d = new Date();
  var s = d.getSeconds();
  //var s = (d.getSeconds() < 10 ? "0" : "") + d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  myClock.textContent = h + ":" + m + ":" + s;
}
setInterval(showTime, 1000);

//Rotate image
const myRImage = document.querySelector("#myRImage");
myRImage.addEventListener("click", rotateImg);
function rotateImg() {
  if (myRImage.className === "normal") {
    myRImage.className = "rotate";
  } else if (myRImage.className === "rotate") {
    myRImage.className = "normal";
  }
}

//Palindrome
const btnSubP = document.querySelector("#btnSubP");
const myTextBox = document.querySelector("#myText");
myTextBox.addEventListener("blur", palindrome);

function palindrome() {
  const myText = document.querySelector("#myText").value;
  if (myText == myText.split("").reverse().join("")) {
    document.querySelector("#displayP").innerHTML = "Yes, its a palindrome";
  } else {
    document.querySelector("#displayP").innerHTML = "No, its not a palindrome";
  }
}

//Validate Username and password
const btnLogin = document.querySelector("#btnLogin");
btnLogin.addEventListener("click", validate);
//
var auth = [
  {
    username: "superadmin",
    password: "tiger",
  },
  {
    username: "admin",
    password: "bear",
  },
  {
    username: "lavina",
    password: "wolf",
  },
  {
    username: "john",
    password: "deer",
  },
];
document.querySelector("#displayVMessage").innerHTML = "";
function validate() {
  const myUsername = document.querySelector("#myUsername").value;
  const myPassword = document.querySelector("#myPassword").value;
  document.querySelector("#displayVMessage").innerHTML =
    "Username and/or password incorrect";
  auth.map((authItem) => {
    if (authItem.username == myUsername && authItem.password == myPassword) {
      document.querySelector("#displayVMessage").innerHTML =
        "Authenticated successully";
    }
  });
}

// Remove event listener

const myRBtn = document.querySelector("#myRBtn");
const myRDiv = document.querySelector("#myRDiv");
myRBtn.addEventListener("click", removeHandler);

myRDiv.addEventListener("mousemove", myFunction);
function myFunction() {
  document.querySelector("#demo").innerHTML = Math.random();
}

function removeHandler() {
  myRDiv.removeEventListener("mousemove", myFunction);
}

// add items to cart *******************

objShopList = [
  {
    item: "Tshirt",
    price: "50",
  },
  {
    item: "jeans",
    price: "99.99",
  },
  {
    item: "dress",
    price: "150",
  },
];
objCartList = [];
// display Shop List from Object
const shopList = document.querySelector("#shopList");
document.querySelector("#displayVMessage").innerHTML =
  "Username and/or password incorrect";
objShopList.map((shopList) => {
  var ul = document.querySelector("#shopList");
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.id = shopList.item;
  ul.appendChild(li);
  li.innerHTML = shopList.item;
  var myitem = document.querySelector(`#${shopList.item}`);
  myitem.addEventListener("click", moveToCart());
});

function moveToCart() {
  //alert("move");
}
//

// end add items to cart *************

// Digital StopWatch
// https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/
