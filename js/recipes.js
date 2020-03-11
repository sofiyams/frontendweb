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
  const btn = document.createElement('btn');
  btn.textContent = cake.btn;
  article.appendChild(btn);
  return article;
}

const cakeData = [
  {
    name: "Chocolate Cake",
    img: "../2019-20-sofiyams/img/chocolate-cake.jpg",
    description: "Gooey chocolate cake",
    button:"btn"
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
  },
  {
    name: "Pretty Little Liars Cake",
    img: "../2019-20-sofiyams/img/PLL.jpg",
    description: "Pretty little liars vanilla sponge cake"
  },
  {
    name: "Fresh Cream Fruit Cake",
    img: "../2019-20-sofiyams/img/fruit_cake.jpg",
    description: "A fresh cream sponge cake with fresh fruit"
  },
  {
    name: "Fondant Love Sponge Cake",
    img: "../2019-20-sofiyams/img/Aishteru.jpg",
    description: "Small sponge cake with fondant icing"
  },
]

cakeData.forEach(loadCake);

function loadCake(cake) {
  const mycake = buildCake(cake);
  cakes.appendChild(mycake);
}

document.getElementById('cakes').appendChild(cake);

document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
        if (target.hasAttribute('data-target')) {
            var m_ID = target.getAttribute('data-target');
            document.getElementById(m_ID).classList.add('open');
            e.preventDefault();
        }
    }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
        var modal = document.querySelector('[class="modal open"]');
        modal.classList.remove('open');
        e.preventDefault();
    }
}, false);
