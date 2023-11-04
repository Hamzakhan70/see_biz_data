/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("slider-container").style.position = "absolute";
  document.getElementById("slider-container").style.top = "1px";
  document.getElementById("mySidenav").style.width = "350px";
  document.getElementById("dark-part").style.width = "850px";
  document.getElementById("dark-part").style.height = "1150px";
  document.getElementById("dark-part").style.backgroundColor = "black";
  document.getElementById("dark-part").style.opacity = "0.4";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("dark-part").style.width = "0px";
}
// Get the modal
var modal = document.getElementById("dark-part");
var mod = document.getElementById("cart");
var mod1 = document.getElementById("sidebardata");
var mod2 = document.getElementById("hid-1");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    document.getElementById("mySidenav").style.width = "0px";
    document.getElementById("dark-part").style.width = "0px";
  } else {
    console.log(event.target + "from else----");
  }
};
