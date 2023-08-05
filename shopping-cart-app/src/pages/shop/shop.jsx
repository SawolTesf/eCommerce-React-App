import React, { useState, useEffect } from 'react'
import { getProducts } from '../../products';
import { Product } from './product';

export const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='shop'>
        <div className='shop-Title'>
            <h1> Welcome to Our Online Shop </h1>
        </div>
        <div className='products'>
          {products.map((product) => (
            <Product data={product}/>
          ))}
        </div>
    </div>
  );
}
