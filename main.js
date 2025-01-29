const productsE = [
    { id: 1, name: "Store 1",  image: "img/banner1.jpg" ,url: "store1.html"},
    { id: 1, name: "Store 2",  image: "img/banner1.jpg" },
    { id: 1, name: "Store 3",  image: "img/banner1.jpg" },
    { id: 1, name: "Store 4",  image: "img/banner1.jpg" },
  ];

  const productsX = [
    { id: 1, name: "Store 5",  image: "img/banner1.jpg" },
    { id: 1, name: "Store 6",  image: "img/banner1.jpg" },
    { id: 1, name: "Store 7",  image: "img/banner1.jpg" },
    { id: 1, name: "Store 8",  image: "img/banner1.jpg" },
  ];


  const productContainer = document.getElementById("product-container");


  function displayProducts(products) {
    productContainer.innerHTML = ""; 
    products.forEach(product => {
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <h4>${product.name}</h4>
          <a href="${product.url}">OPEN</a>
        </div>
      `;
      productContainer.innerHTML += productCard;
    });
  }

  document.getElementById("menu-e").addEventListener("click", () => displayProducts(productsE));
  document.getElementById("menu-x").addEventListener("click", () => displayProducts(productsX));
