import React from 'react'
import { products } from '../../products';
import { Product } from './product';

export const Shop = () => {
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
