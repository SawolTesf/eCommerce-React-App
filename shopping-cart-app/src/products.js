// products.js
let products = [];

fetch("https://fakestoreapi.com/products", { mode: "cors" })
  .then((response) => response.json())
  .then((response) => {
    response.forEach(product => console.log(product));
  })
  .catch((error) => console.log(error));

export { products };