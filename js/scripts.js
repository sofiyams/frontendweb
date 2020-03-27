"use strict";

function toggleNav() {
  document.getElementById("sideNav").classList.toggle('open');
}
closeNav.addEventListener('click', toggleNav);
openNav.addEventListener('click', toggleNav);
