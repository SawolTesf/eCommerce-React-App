export const getProducts = () => {
    return fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
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
  