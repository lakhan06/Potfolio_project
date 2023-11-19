var submit = document.querySelector(".submit");
var sidebarEl = document.querySelector(".sidebar");
var toogleEl = document.querySelector(".toogle");

var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var input3 = document.querySelector(".input3");
var textarea = document.querySelector("textarea");

// alert on clicking submit
function alertsubmit() {
  alert("your details had been  submited");
}

// function for sidebar

function sidebarcomes() {
  sidebarEl.style.setProperty("transform", "translateY(0px)");
  toogleEl.style.setProperty("opacity", "0");
}
function sidebargo() {
  sidebarEl.style.setProperty("transform", "translateY(-2000px)");
  toogleEl.style.setProperty("display", "block");
}

// sound on key press
function showKeyCode(e) {
  var letter = e.keyCode;

  if (letter != 32) {
    var audio = new Audio("images/mouse-click-153941.mp3");
    audio.play();
  } else {
    document.getElementById("TextBox1").value = "";
  }
}

// highlight feature on class addition and removal
function inputfocus1() {
  input1.classList.add("focus");
}
function inputfocus2() {
  input2.classList.add("focus");
}
function inputfocus3() {
  input3.classList.add("focus");
}
function inputfocus4() {
  textarea.classList.add("focus");
}
function outfocus1() {
  input1.classList.remove("focus");
}
function outfocus2() {
  input2.classList.remove("focus");
}
function outfocus3() {
  input3.classList.remove("focus");
}
function outfocus4() {
  textarea.classList.remove("focus");
}
