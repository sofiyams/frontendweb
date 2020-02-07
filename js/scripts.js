const hello = document.getElementById("hello");

function greeting() {
  console.log("hello world");
  console.log("Sophies bakes and cakes, the best in town!")
}
hello.addEventListener('click', greeting);

const input1 = document.getElementById("something");
input1.addEventListener('dblclick', something);

function something(e){
  e.target.classList.toggle("highlighted")
  console.log(e);
}
