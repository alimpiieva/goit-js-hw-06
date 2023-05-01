const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

  
const ingredientList = document.querySelector('#ingredients');

const createIngredientsList = (() => {
  const ingredientsItems = ingredients.map((ingredient) => {
    const ingredientItem = document.createElement("li");
    ingredientItem.classList.add('item');
    ingredientItem.textContent = ingredient;
    return ingredientItem;
  });

  ingredientList.append(...ingredientsItems);
});

createIngredientsList();
