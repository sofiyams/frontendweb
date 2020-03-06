"use strict";

function buildCake(cake) {
  const article =  document.createElement('article');
  article.classList.add('cake');
  const h4 = document.createElement('h4');
  h4.textContent = cake.name;
  article.appendChild(h4);
  const p = document.createElement('p');
  p.textContent = cake.description;
  article.appendChild(p);
  const image = document.createElement('img');
  image.src = cake.img;
  article.appendChild(image);
  return article;
}

const cakeData = [
  {
    name: "Chocolate Cake",
    img: "../2019-20-sofiyams/img/chocolate-cake.jpg",
    description: "Gooey chocolate cake"
  },
  {
    name: "Chocolate Drip Cake",
    img: "../2019-20-sofiyams/img/drip.jpg",
    description: "Chocolate layered sponge cake"
  },
  {
    name: "Victoria Sponge Cake",
    img: "../2019-20-sofiyams/img/VSCake.jpg",
    description: "Airy sponge cake"
  }
]

cakeData.forEach(loadCake);

function loadCake(cake) {
  const mycake = buildCake(cake);
  cakes.appendChild(mycake);
}

document.getElementById('cakes').appendChild(cake);
