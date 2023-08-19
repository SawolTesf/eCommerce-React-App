import React, { useState, useEffect } from 'react'
import { getProducts } from '../../products';
import { Product } from './product';
import './shop.css';

// Exporting the Shop component
export const Shop = () => {

  /*
  The useState hook will allow me to handle and manage the states (data or properties), so I will be able to create, track, and update a state in functional components

  params - initial value for the state variable (products and loading) and a function to update the state variable (setProducts and setLoading)
  */

  // Defining the state for products and loading
  const [products, setProducts] = useState([]); // set the initial value of products to an empty array
  const [loading, setLoading] = useState(true); // set the initial value of loading to true

  // Using the useEffect hook to fetch products and update the state
  useEffect(() => {
    // Calling the getProducts function to fetch products
    getProducts()
      .then((products) => {
        // Updating the state with the fetched products
        setProducts(products);
        // Setting the loading state to false
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  // If loading is true, display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // Returning the JSX for the Shop component
  return (
    <div className='shop'>
        {/* Displaying the shop title */}
        <div className='shop-title text-center text-5xl font-bold'>
            <h1> Welcome to Our Online Shop </h1>
        </div>
        {/* Displaying the products */}
        <div className='products grid grid-cols-3 w-full gap-6 justify-stretch pt-6 text-center p-18'>
          {/* Mapping over the products array and rendering a Product component for each product */}
          {products.map((product) => (
            <Product key={product.id} data={product} className='group relative'/>
          ))}
        </div>
    </div>
);
}
