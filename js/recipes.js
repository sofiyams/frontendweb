"use strict";

function buildCake(cake) {
  const article = document.createElement('article');
  article.classList.add('cake');
  const image = document.createElement('img');
  image.src = cake.img;
  image.alt = cake.description;
  article.appendChild(image);
  const h4 = document.createElement('h4');
  h4.textContent = cake.name;
  article.appendChild(h4);
  const p = document.createElement('p');
  p.textContent = cake.description;
  article.appendChild(p);
  const btn = document.createElement('button');
  btn.classList.add('btn');
  const modal = buildCakeModal(cake);
  article.appendChild(modal);
  btn.setAttribute('data-target', modal.id);
  btn.setAttribute('data-toggle', 'modal');
  btn.innerHTML = "View Recipe"
  article.appendChild(btn);
  return article;
}


const cakeData = [{
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
  },
  {
    name: "Pretty Little Liars Cake",
    img: "../2019-20-sofiyams/img/PLL.jpg",
    description: "Pretty little liars vanilla sponge cake"
  },
  {
    name: "Fresh Cream Fruit Cake",
    img: "../2019-20-sofiyams/img/fruit_cake.jpg",
    description: "Fresh cream sponge cake with fruit"
  },
  {
    name: "Fondant Love Sponge Cake",
    img: "../2019-20-sofiyams/img/Aishteru.jpg",
    description: "Small sponge cake with fondant icing"
  }
]

function buildCakeModal(cake) {
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modal');
  const id = cake.name.replace(/\s+/g, '-').toLowerCase();
  modal.setAttribute('id', id);
  const innerDiv = document.createElement('div');
  innerDiv.setAttribute('class', 'modal-window');
  const h3 = document.createElement('h3');
  h3.textContent = cake.name;
  const recipe = document.createElement('p');
  recipe.textContent = cake.description;
  innerDiv.appendChild(h3);
  innerDiv.appendChild(recipe);
  modal.appendChild(innerDiv);
  return modal;
}

cakeData.forEach(loadCake);

function loadCake(cake) {
  const mycake = buildCake(cake);
  cakes.appendChild(mycake);
}

document.getElementById('cakes').appendChild(cake);

document.addEventListener('click', function(e) {
    console.log('click');
    e = e || window.event;
    const target = e.target || e.srcElement;

    if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
      if (target.hasAttribute('data-target')) {
        const m_ID = target.getAttribute('data-target');
        console.log(m_ID);
        document.getElementById(m_ID).classList.add('open');
        e.preventDefault();
      }
    }

    // Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
    if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
      const modal = document.querySelector('[class="modal open"]');
      modal.classList.remove('open');
      e.preventDefault();
    }
  },
  false);
