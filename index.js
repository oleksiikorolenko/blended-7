import"./assets/styles-0jjx1hvP.js";import{a}from"./assets/vendor-BvLu_gPC.js";a.defaults.baseURL="https://dummyjson.com";async function i(){return(await a.get("/products/category-list")).data}async function r(){const t=await a.get("https://dummyjson.com/products?limit=12&skip=0");return console.log(t.data.products),t.data.products}async function l(s="smartphones"){const e=await a.get(`products/category/${s}`);return console.log(e.data.products),e.data.products}const o={allCategories:document.querySelector(".categories"),allProducts:document.querySelector(".products"),notFoundDiv:document.querySelector(".not-found")};function u(s){o.allCategories.innerHTML="";const e=s.map(t=>`
    <li class="categories__item">
      <button class="categories__btn" type="button">${t}</button>
    </li>
  `).join("");o.allCategories.innerHTML=e}function c(s){s.length===0&&o.notFoundDiv.classList.add("not-found--visible"),o.notFoundDiv.classList.remove("not-found--visible"),o.allProducts.innerHTML="";const e=s.map(t=>`<li class="products__item" data-id="${t.id}">
          <img class="products__image" src="${t.images[0]}" alt="${t.title}" />
          <p class="products__title">${t.title}</p>
          <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${t.brand}</p>
          <p class="products__category">Category: ${t.category}</p>
          <p class="products__price">Price: $${t.price}</p>
        </li>`).join("");o.allProducts.innerHTML=e}async function d(){const e=["All",...await i()];u(e)}d();async function p(){const s=await r();c(s)}p();o.allCategories.addEventListener("click",async s=>{const e=s.target.closest(".categories__btn");if(!e)return;const t=e.textContent;if(t==="All"){const n=await r();c(n)}else{const n=await l(t);c(n)}});
//# sourceMappingURL=index.js.map
