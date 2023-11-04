let btn = document.getElementById("head");
btn.addEventListener("click", function abc() {
  btn.style.backgroundColor = "red";
  let p = document.createElement("p");
  let node = document.createTextNode("this is created dynamically");
  p.appendChild(node);
  //   document.getElementById("main").appendChild(p);
  document.getElementById("main").append(p);
  console.log("dynamic");
});
