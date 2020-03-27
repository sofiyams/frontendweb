"use strict";

const API_URL = `https://api.edamam.com/search?q=cake&app_id=3d9c5788&app_key=ec37d78e5c7a3a311ad52de140e9b815`;
// const API_URL = `https://api.edamam.com/recipe/cake`;

function buildRecipe(data) {
  let recipe = data.recipe;
  const article =  document.createElement('article');
  article.classList.add('recipe');
  const image = document.createElement('img');
  image.src = recipe.image;
  article.appendChild(image);
  const h4 = document.createElement('h4');
  h4.textContent = recipe.label;
  article.appendChild(h4);
  const ul = document.createElement('ul');
  recipe.ingredientLines.forEach((ingredient) => {
    let li = document.createElement('li');
    li.textContent = ingredient;
    ul.appendChild(li);
  });

  let li = document.createElement('li');
  li.textContent = recipe.healthLabels;
  ul.appendChild(li);
  article.appendChild(ul);
  return article;
}

const getRecipeAsync = async (cakes) => {
  let response = await fetch(`${API_URL}`);
  let data = await response.json();
  console.log(data.hits);
  const main = document.getElementsByTagName('section')[0];
  data.hits.forEach((hit) => {
    let article = buildRecipe(hit);
    main.appendChild(article);
  });
}

getRecipeAsync();
// add in a section like recipe page
// make healthLabels into span and loop it like ul
// will have to change the const main to get the section and not the main perhaps?
// style it the same way as recipes with cake grid (section) <-- put the display flex in here
// then style recipe(article)
