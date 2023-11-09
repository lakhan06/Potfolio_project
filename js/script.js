var sidebarEl = document.querySelector(".sidebar");
var toogleEl = document.querySelector(".toogle");
// var sidebarEl=document.querySelector(".sidebar")

function sidebarcomes() {
  sidebarEl.style.setProperty("transform", "translateY(0px)");
  toogleEl.style.setProperty("opacity", "0");
}
function sidebargo() {
  sidebarEl.style.setProperty("transform", "translateY(-2000px)");
  toogleEl.style.setProperty("display", "block");
}
