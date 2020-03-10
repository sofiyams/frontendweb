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
  const ckbtn = document.createElement('ckbtn');
  ckbtn.textContent = cake.ckbtn;
  article.appendChild(ckbtn);
  return article;
}

const cakeData = [
  {
    name: "Chocolate Cake",
    img: "../2019-20-sofiyams/img/chocolate-cake.jpg",
    description: "Gooey chocolate cake",
    button:"ckbtn"
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
