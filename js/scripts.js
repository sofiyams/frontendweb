"use strict";

// function cake(e) {
//   console.log(e);
//   e.target.classList.toggle("highlighted")
// }


// const bakes = document.getElementById("bakes");
// function greeting() {
//   console.log("Sophies bakes and cakes, the best in town!")
// }
// bakes.addEventListener('click', greeting);


function toggleNav() {
  document.getElementById("sideNav").classList.toggle('open');
}
closeNav.addEventListener('click', toggleNav);
openNav.addEventListener('click', toggleNav);
