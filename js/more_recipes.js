"use strict";

const API_URL = `https://api.edamam.com/search?q=cake&app_id=3d9c5788&app_key=ec37d78e5c7a3a311ad52de140e9b815`;
// const API_URL = `https://api.edamam.com/recipe/cake`;
const cakeLabels = [
                  "Caramel Cake",
                  "Cakespy: Crumb Cake Shake Recipe",
                  "Lollipop Garden Cake",
                  "Champagne Cake",
                  "Sprinkle Cake Bites",
                  "Cake pops",
                  "project wedding cake: the cake is baked",
                  "Lemon or Orange Cake (Cake Citron ou Cake"
                  ]

const getRecipeAsync = async (cakes) => {
  let response = await fetch(`${API_URL}`);
  let data = await response.json();
  return data;
}

const showRecipes = (morecake) => {
  const content =
   `<section>
      <img src="${morecake.hits.recipe.image}" alt="recipe.image">
      <div>
        <ul>
          <li>Name: ${morecake.hits.recipe.label}</li>
          <li>Ingredients: ${morecake.hits.recipe.ingredientsLines}</li>
          <li>Extra Info: ${morecake.hits.recipe.healthLabels}</li>
        </ul>
      </div>
    </section>`;
  showData.insertAdjacentHTML("beforeend", content);
}

showData.innerText = "";

cakeLabels.forEach( cake => {
getRecipeAsync(cake)
  .then(data => {
    console.log(data);
    showRecipes(data);
  })
});
