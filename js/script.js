var sidebarEl=document.querySelector(".sidebar")
var toogleEl=document.querySelector(".toogle")

var submit=document.querySelector(".submit")
// var sidebarEl=document.querySelector(".sidebar")

function alertsubmit(){
   alert("your details had been  submited");
}



function sidebarcomes(){
   sidebarEl.style.setProperty("transform", "translateY(0px)")
   toogleEl.style.setProperty("opacity", "0")
}
function sidebargo(){
   sidebarEl.style.setProperty("transform", "translateY(-2000px)")
   toogleEl.style.setProperty("display", "block")
}

function showKeyCode(e) {
   var letter = e.keyCode

   if (letter != 32)
   {
       var audio = new Audio("./images/interface-124464.mp3");
       audio.play();
   }
   else
   {
       document.getElementById("TextBox1").value = "";
   }
}
