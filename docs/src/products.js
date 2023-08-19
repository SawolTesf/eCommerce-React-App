// Exporting the getProducts function
export const getProducts = () => {
  // Fetching data from the fakestoreapi.com API
  return fetch("https://fakestoreapi.com/products", { mode: "cors" }) // Adding the mode: "cors" option to allow cross-origin requests
    .then((response) => response.json()) // Parsing the response to JSON
    .then((response) => {
      // Logging the response to the console
      //console.log(response);

      /* Mapping the response to an array of products. Creates a new array by calling a provided function on every element. Essentially transforms the response into a array of products */
      return response.map((product, index) => ({
        id: index + 1,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
      }));
    });
};