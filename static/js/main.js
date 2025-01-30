const productsE = [
    { id: 1, name: "Store 1",  image: "img/banner1.jpg" ,url: "store1.html"},
    { id: 1, name: "Store 2",  image: "img/banner1.jpg" ,url: "store2.html"},
    { id: 1, name: "Store 3",  image: "img/banner1.jpg" ,url: "store3.html"},
    { id: 1, name: "Store 4",  image: "img/banner1.jpg" ,url: "store4.html"},
  ];

  const productsX = [
    { id: 1, name: "BB ส้มตำเเซป",  image: "img/store5.jpeg" ,url: "store5.html"},
    { id: 1, name: "ข้ามมันไก่โกหนุน",  image: "img/store6.jpg" ,url: "store6.html"},
  ];


  const productContainer = document.getElementById("product-container");


  function displayProducts(products) {
    productContainer.innerHTML = ""; 
    products.forEach(product => {
      const productCard = `
        <div class="product-card">
          <img src="${product.image}" alt="">
          <h4>${product.name}</h4>
          <a href="${product.url}">OPEN</a>
        </div>
      `;
      productContainer.innerHTML += productCard;
    });
  }

  document.getElementById("menu-e").addEventListener("click", () => displayProducts(productsE));
  document.getElementById("menu-x").addEventListener("click", () => displayProducts(productsX));
