import React, { useState, useEffect } from 'react'
import { getProducts } from '../../products';
import { Product } from './product';
import './shop.css';

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
        <div className='shop-title text-3xl font-bold underline'>
            <h1> Welcome to Our Online Shop </h1>
        </div>
        <div className='products grid grid-cols-3 w-full gap-6 justify-stretch pt-6 text-center'>
          {products.map((product) => (
            <Product key={product.id} data={product} className='group relative'/>
          ))}
        </div>
    </div>
  );
}
