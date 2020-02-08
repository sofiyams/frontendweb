const input1 = document.getElementById("something");
input1.addEventListener('dblclick', something);

function something(e){
  e.target.classList.toggle("highlighted")
  console.log(e);
}

const bakes = document.getElementById("bakes");

function greeting() {
  console.log("Sophies bakes and cakes, the best in town!")
}
bakes.addEventListener('click', greeting);

function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}
