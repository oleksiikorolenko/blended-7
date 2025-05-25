import { fetchCategories } from './js/products-api.js'
import { refs } from './js/refs.js'
import { markupCategories, markupProducts } from './js/render-function.js'
import { fetchProducts, getProductsByCategory } from './js/products-api.js';


async function renderCategories() {
    const categories = await fetchCategories();
    const allCategories = ['All', ...categories];
    markupCategories(allCategories);
}
renderCategories();


async function renderProducts() {
    const categories = await fetchProducts();
    markupProducts(categories);
}

renderProducts();

// refs.allCategories.addEventListener('click', async (event) => {
//     const clickBtn = event.target.closest('.categories__btn');
//     console.log(clickBtn.textContent);

//     const catName = clickBtn.textContent.trim();
//      if (!catName) {
//         return;
//     }
//     let arrProducts = [];
//     if (catName === 'All') {
//         const response = await fetchProducts();
//         console.log(response);
//         markupProducts(response);
//     } else {
//         getProductsByCategory(catName);
//     }
//     const products = await getProductsByCategory(catName)
//     markupProducts(products)
// });

refs.allCategories.addEventListener('click', async event => {
    const clickBtn = event.target.closest('.categories__btn');
    if (!clickBtn) {
      return;
    }
    const category = clickBtn.textContent;
  
    if (category === 'All') {
      const products = await fetchProducts();
      markupProducts(products);
    } else {
      const products = await getProductsByCategory(category);
      markupProducts(products);
    }

  });