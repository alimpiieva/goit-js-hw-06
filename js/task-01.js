const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryTitle = category.firstElementChild.textContent;
  const categoryItems = category.lastElementChild.childElementCount;

console.log(`Category: ${categoryTitle} Elements: ${categoryItems}`);
});







