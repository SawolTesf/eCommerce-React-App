import React, {useState, useEffect, useContext} from 'react'
import { getProducts } from '../../products';
import { CartItem } from './cartItem';
import { ShopContext } from '../../context/shop-context';

export const Cart = () => {
  const {cartItems} = useContext(ShopContext); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className='Cart'>
      <div className='text-center text-5xl font-bold'>
        <h1>Cart Items</h1>
      </div>
      <div className='cartItems'>
        {products.map((product) => {
          if(cartItems[product.id] > 0){
            console.log(product.id);
            return <CartItem key={product.id} data={product} />
          }
        })}
      </div>
    </div>
  );
}
