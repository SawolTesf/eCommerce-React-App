import React, { createContext } from 'react'

export const ShopContext = createContext(null);

// This function will set each product's quantity to 0

const getDefaultCart = () => {
  let cart = {};
  for(let i = 0; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart()); 

    const addToCart = (id) => {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    };

    const removeFromCart = (id) => {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    };
      
  return (
    <ShopContext.Provider>{props.children}</ShopContext.Provider>
  )
}