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
  let li = document.createElement('li');
  li.textContent = recipe.ingredientLines;
  ul.appendChild(li);
  li = document.createElement('li');
  li.textContent = recipe.healthLabels;
  ul.appendChild(li);
  article.appendChild(ul);
  return article;
}

const getRecipeAsync = async (cakes) => {
  let response = await fetch(`${API_URL}`);
  let data = await response.json();
  console.log(data.hits);
  const main = document.getElementsByTagName('main')[0];
  data.hits.forEach((hit) => {
    let article = buildRecipe(hit);
    main.appendChild(article);
  });
}

getRecipeAsync();





// const cakeLabels = [
//   {
//     img: "https://www.edamam.com/web-img/482/482417e9943411f0e7db4be74a7b5114.jpg",
//     label: "Caramel Cake",
//     ingredientsLines: {
//                         "2 cup sifted cake flour(not self-rising; sift before measuring),for cake",
//                         "2 tbsp sifted cake flour,for cake",
//                         "1 tsp Baking Powder,for cake",
//                         "3/4 tsp Baking Soda,for cake",
//                         "1/2 tsp Salt,for cake",
//                         "1 stick unsalted butter, softened(4 oz),for cake",
//                         "1 cup Granulated Sugar,for cake",
//                         "1 tsp pure vanilla extract,for cake",
//                         "2 x large eggs, at room temperature 30 minutes,for cake",
//                         "1 cup Buttermilk,well shaken,for cake",
//                         "1 cup Heavy Cream,for caramel glaze",
//                         "1/2 cup packed light brown sugar,for caramel glaze",
//                         "1 tbsp Light Corn Syrup,for caramel glaze",
//                         "1 tsp pure vanilla extract,for caramel glaze"
//                       },
//     healthLabels: {
//                     "Vegetarian",
//                     "Peanut-Free",
//                     "Tree-Nut-Free",
//                     "Alcohol-Free"
//                   },
//   }
// ]
                  // "Cakespy: Crumb Cake Shake Recipe",
                  // "Lollipop Garden Cake",
                  // "Champagne Cake",
                  // "Sprinkle Cake Bites",
                  // "Cake pops",
                  // "project wedding cake: the cake is baked",
                  // "Lemon or Orange Cake (Cake Citron ou Cake"


// const showRecipe = (recipe) => {
//   const content =
//    `<section>
//       <img src="${recipe.image}" alt="recipe.image">
//       <div>
//         <ul>
//           <li>Name: ${recipe.label}</li>
//           <li>Ingredients: ${recipe.ingredientsLines}</li>
//           <li>Extra Info: ${recipe.healthLabels}</li>
//         </ul>
//       </div>
//     </section>`;
//   showData.insertAdjacentHTML("beforeend", content);
// }
//
// showData.innerText = "";


// const loadCakes = data => {
//   showRecipe(data.hits);
// }
// getRecipeAsync().then(loadCakes);
// cakeLabels.forEach( cake => {
//   .then(data => {
//     console.log(data);
//     showRecipes(data);
//   })
// });
