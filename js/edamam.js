"use strict";

const API_URL = `https://api.edamam.com/search?q=cake&app_id=3d9c5788&app_key=ec37d78e5c7a3a311ad52de140e9b815`;
// const API_URL = `https://api.edamam.com/recipe/cake`;

function buildRecipe(data) {
  let recipe = data.recipe;
  const article = document.createElement('article');
  article.classList.add('recipe');
  const image = document.createElement('img');
  image.src = recipe.image;
  image.alt = recipe.label;
  article.appendChild(image);
  const h4 = document.createElement('h4');
  h4.textContent = recipe.label;
  article.appendChild(h4);
  const ul = document.createElement('ul');
  recipe.ingredientLines.forEach((ingredient) => {
    let li = document.createElement('li');
    li.textContent = ingredient;
    ul.appendChild(li);
    article.appendChild(ul);
  });
  const div = document.createElement('div');
  recipe.healthLabels.forEach((label) => {
    let span = document.createElement('span');
    span.textContent = label;
    div.appendChild(span);
    article.appendChild(div);
  });
  return article;
}

async function getRecipeAsync(cakes) {
  let response = await fetch(`${API_URL}`);
  let data = await response.json();
  const main = document.getElementsByTagName('section')[0];
  data.hits.forEach((hit) => {
    let article = buildRecipe(hit);
    main.appendChild(article);
  });
}

getRecipeAsync();
