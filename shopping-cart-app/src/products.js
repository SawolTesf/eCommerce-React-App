// products.js
let products = [];
let id = 0;

fetch("https://fakestoreapi.com/products", { mode: "cors" })
  .then((response) => response.json())
  .then((response) => {
    response.forEach((product) => {
        let productObj = {
            id: id,
            title: product.title,
            price: product.price,
            description: product.description,
        };
        products.push(productObj);
        id++;
    });
  })
  .catch((error) => console.log(error));

export { products };