//Your code goes here
//0. Change the size of h4
let h4 = document.querySelectorAll("h4");
console.log(h4);
for (i = 0; i < h4.length; i++) {
  h4[i].style.fontSize  = "1em";
}


// 1. Click the button to display your name
let myName = document.querySelector("#myName"); 
let btnName = document.querySelector("#btnName");

btnName.onclick = function(){  
    //alert("here");
    let msg = "Hello world";
    myName.value = msg; 
}

//2. Switch lights on mouseover
let imageOff = document.querySelector("#imageOff"); 
imageOff.onmouseover = function(){  
    //alert("here");
    imageOff.src = "images/lighton.png";
}
imageOff.onmouseout = function(){  
    //alert("here");
    imageOff.src = "images/lightoff.png";
}

//3. Double click to display content
let btndbName = document.querySelector("#btndbName");
let displayPara = document.querySelector("#displayPara");
btndbName.ondblclick = function(){  
    displayPara.innerHTML = "You double clicked me";
    //alert("here");
    displayPara.style.color = "red";
    //create a new img element
    let newimg = document.createElement("img");
    newimg.src = "images/smileyface.png";
    displayPara.appendChild(newimg);
} 