let productsDiv = document.querySelector(".products");
let categoryDiv = document.querySelector(".category_list");
let allCat = [];
let allProducts = [];

let displayProduct = (productsToShow) => {
  productsDiv.innerHTML = "";

  if (productsToShow.length === 0) {
    productsDiv.innerHTML = "<p>No products found.</p>";
    return;
  }

  productsToShow.forEach((product) => {
    productsDiv.innerHTML += `
      <div class="product-box">
        <div class="product_img">
          <img src="${product.image}" alt="">
        </div>
        <div class="context">
          <h5>
            <span class="price">₹ ${Math.round(product.price * 80)}</span>
            <span class="divider"> | </span>
            <span class="material-symbols-outlined star">star</span>
            <span class="rating">${product.rating.rate}</span>
          </h5>
          <h1>${product.title}</h1>
          <p>${product.description}</p>
        </div>
      </div>
    `;
  });
};

let fetchAndDisplayProducts = async () => {
  let response = await fetch("https://fakestoreapi.com/products");
  allProducts = await response.json();

  allProducts.forEach((product) => {
    if (!allCat.includes(product.category)) {
      allCat.push(product.category);
      categoryDiv.innerHTML += `
        <label>
          <input type="checkbox" class="checkbox" value="${product.category}" />
          ${product.category}
        </label>`;
    }
  });

  displayProduct(allProducts);
};

fetchAndDisplayProducts();

let applyAllFilters = () => {
  let checkedInputs = document.querySelectorAll(".checkbox:checked");
  let selectedCategories = Array.from(checkedInputs).map((input) => input.value);

  let minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
  let maxPrice = parseFloat(document.getElementById("maxPrice").value) || 10000;

  let minRating = parseFloat(document.getElementById("minRating").value) || 0;

  let filtered = allProducts.filter((product) => {
    let inCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    let priceInINR = product.price * 80;
    let inPriceRange = priceInINR >= minPrice && priceInINR <= maxPrice;
    let meetsRating = product.rating.rate >= minRating;

    return inCategory && inPriceRange && meetsRating;
  });

  displayProduct(filtered);
};
