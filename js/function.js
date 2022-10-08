/*function changeBackgroundColor(color){
    var textBox = document.getElementById("html").backgroundColor;
    var textBoxClasses = "text-white p-2 bg-" + color;
    console.log(textBoxClasses);
    textBox.className = textBoxClasses;
    localStorage.setItem("bkcolor", color);
 
}

    //if (color) {
        //localStorage.setItem("color", color)
    //}


function setDefaultName(){
    var defaultName = localStorage.getItem("name");
    if(!defaultName){
        localStorage.setItem("name", "username");
    }
}

function setUserName(username){
    console.log(username);
    document.getElementById("name").innerText = username;
}

function changeUserName(){
    var inputName =  document.getElementsByName("username")[0];
    if (inputName.value){
        localStorage.setItem("name", inputName.value);
        setUserName(inputName.value);
    }               
    inputName.value = "";
}
*/



/*
document.getElementsByName("checkbox").onclick = function() {myFunction()};

function myFunction() {

    document.html.style.backgroundColor = "black";

}*/

let original = "radial-gradient( circle farthest-corner at 10% 20%,  rgba(97,186,255,1) 0%, rgba(166,239,253,1) 90.1% )";
//var switcher = document.getElementById("myCheck");
var count = 0;
function start() {
    
    var toggleSwitch = document.getElementById("slider");
    toggleSwitch.addEventListener("click", toggle);
    if (count == 0) {
        count++;

        localStorage.setItem("toggle", false);
    } else if (count == 1) {
        count--;
        localStorage.setItem("toggle", true);
    }
  };
  
  function toggle() {
    var backColor = document.body.style.background;
    var input = document.getElementById("myCheck");
    if (input.checked == false) {
        backColor = "black";
        document.body.style.background = "black";
        //localStorage.setItem("checking", input.checked);
    } else {
        backColor = original;
        document.body.style.background = original;
        
    }
    //document.body.style.background = backColor === "black"? original  : "black";

    localStorage.setItem("bkcolor",backColor);
    localStorage.setItem("checking", input);
  };
  /*
  function themeToggle() {
      if (toggleSwitch.checked) {

      }
  }*/

 window.onload = function(){
    //setDefaultName();
    //document.getElementById("name").innerText = localStorage.getItem("name");
    //document.getElementById("textBox1").color 
    //var colorX= localStorage.getItem("colorbox");
    //var current = localStorage.getitem(backColor);
    //document.body.style.background = backColor;
    var bk = localStorage.getItem("bkcolor");
    document.body.style.background = bk;
    var input = localStorage.getItem("checking");
    if (bk == original) { //input.checked == false
        document.getElementById("myCheck").checked = false;
    } else if (bk == "black"){ //input.checked == true
        document.getElementById("myCheck").checked = true;
    }
    
    /*
    var previous = localStorage.getItem("toggle");
    //var x_count = count;
    if (previous == false) {
        document.getElementById("myCheck").checked = false;
        document.body.style.background = "black";
        count = 1;
    } else if (previous == true) {
        document.getElementById("myCheck").checked = true;
        document.body.style.background = original;
        count = 0;
    }*/

    /*
    if (document.getElementById("myCheck").checked) {
        document.body.style.background = original;
    } else {
        document.body.style.background = "black";
    }
    */

    //changeBackgroundColor(colorX);
    //changeBackgroundColor(color);
    // TODO: Make the text box color persist even when someone refreshes the page
}
  



  start();
  themeToggle();