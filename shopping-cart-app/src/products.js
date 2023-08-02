// products.js
let products = [];
let id = 0;

fetch("https://fakestoreapi.com/products", { mode: "cors" })
  .then((response) => response.json())
  .then((response) => {
    response.forEach((product) => {
        console.log(product);
        let productObj = {
            id: id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
        };
        products.push(productObj);
        id++;
    });
  })
  .catch((error) => console.log(error));

export { products };