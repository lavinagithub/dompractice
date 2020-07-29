
// 0. change the font size of all h4 elements
let h4 = document.querySelectorAll("h4");
console.log(h4);
for (i = 0; i < h4.length; i++) {
  h4[i].style.fontSize  = "1em";
}

//1. Click on the button to display your name
let btnName = document.querySelector("#btnName");
let myName =  document.querySelector("#myName");
btnName.onclick = function(){
    myName.focus();
    myName.value = "Lavina";
}

//2. Switch lights
let imageOff = document.querySelector("#imageOff");
 imageOff.onmouseover = function(){   
   //  alert("here");
    imageOff.src = "images/lighton.png";
 }
 imageOff.onmouseout = function(){   
    //  alert("here");
     imageOff.src = "images/lightoff.png";
  }

  
//3. Double click the button to display content
let btndbName = document.querySelector("#btndbName");
let displayPara = document.querySelector("#displayPara");
btndbName.ondblclick =function(){
        displayPara.innerHTML = "You double clicked me";
        //displayPara.style.color = red;
        document.getElementById("displayPara").style.color = "#ff0000";
        let newimg = document.createElement("img");
        newimg.src="images/smileyface.png";
        displayPara.appendChild(newimg);
  
}

//4. Change textbox border colours
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let btn2Name = document.querySelector("#btn2Name");
btn2Name.onclick =function(){   
  //firstName.style.color = red;
  document.getElementById("firstName").style.borderColor = "red";
  document.getElementById("lastName").style.borderColor = "green";
}

//5. validate the box
let btnSub2 = document.querySelector("#btnSub2");
let myName2 = document.querySelector("#myName2");
let errMsg = document.querySelector("#errMsg");
btnSub2.onclick = function(){  
    
    if (myName2.value == ""){
        errMsg.innerHTML = "Please enter your name in the box";
        document.getElementById("errMsg").style.color = "#ff0000";
        myName2.focus();
    }
}  


// 6.create a list of hobbies
   let hobbyBtn = document.querySelector("#btnHobbies");
    hobbyBtn.onclick = function(){   
    let hobbiesList = document.querySelector("#hobbies > ul");
    //console.log(hobbiesList);
    for (i=1;i<=3;i++){
        let hobbies = prompt("What are your hobbies");
        let li = document.createElement("li");
        //console.log(hobbies);
        li.innerHTML = hobbies;
        hobbiesList.appendChild(li);
    }
}
