import React, { createContext, useState, useEffect } from 'react'
import { getProducts } from '../products';

/* ShopContext is created using creatContext which is built in from React. Allows you to create a context to share data between components. */

// Creating a new context for the shop

export const ShopContext = createContext(null);


/* I made this function asynchronous because it fetches data from API using getProducts function */

// This function will set each product's quantity to 0

const getDefaultCart = async () => {
  let cart = {};

  /* await keyword waits for promise to be returned by getProducts to resolve before continuing */

  // Fetching the products from the API
  const products = await getProducts();
  // Initializing the cart with all products having a quantity of 0
  for(let i = 0; i < products.length; i++) {
    cart[products[i].id] = 0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  // State for storing the cart items
  const [cartItems, setCartItems] = useState({}); 

  // Using the useEffect hook to initialize the cart when the component mounts
  useEffect(() => {
    // Calling the getDefaultCart function and updating the state with the returned value
    getDefaultCart().then(cart => setCartItems(cart));
  }, []);

  // Function for adding an item to the cart
  const addToCart = (id) => {
    // Updating the state using a functional update
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  // Function for removing an item from the cart
  const removeFromCart = (id) => {
    // Updating the state using a functional update
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  // Function for removing an item from the cart completely
  const removeItem = (id) => {
    // Updating the state using a functional update
    setCartItems((prev) => ({ ...prev, [id]: 0 }));
  };

  // Function for clearing the cart
  const clearCart = () => {
    // Updating the state using a functional update
    setCartItems((prev) => {
      let newCart = { ...prev };
      Object.keys(newCart).forEach(key => newCart[key] = 0);
      return newCart;
    });
  };

  // Creating the context value object
  const contextValue = {cartItems, addToCart, removeFromCart, removeItem, clearCart};
  
  return (
    // Providing the context value to all child components
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
