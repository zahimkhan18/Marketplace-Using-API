fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())

  .then((result) => {
    append(result);
  })
  .catch((error) => {
    console.log(error, "error");
  });

const append = (items) => {
  const parent = document.getElementById("parent");
  for (var product of items) {
    parent.innerHTML += `   <div id="card" class="card" style="width: 18rem;">
        <img src="${product.image}" class="card-img-top" id="image" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">${product.description.slice(0, 100)}</p>
          <P class="card-price">${product.price}$</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
  }
};
