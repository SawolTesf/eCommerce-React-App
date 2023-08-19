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
    <div className='Cart h-screen bg-gray-100 pt-20'>
      <div className='text-center text-5xl font-bold'>
        <h1>Cart Items</h1>
      </div>
      <div className='mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0'>
        <div className='cartItems'>
          {products.map((product) => {
            if(cartItems[product.id] > 0){
              console.log(product.id);
              return <CartItem key={product.id} data={product} />
            }
          })}
        </div>
        <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
          <div className='mb-2 flex justify-between'>
            <p className='class="text-gray-700'>Subtotal</p>
            <p className='class="text-gray-700'>$240</p>
          </div>
          <div className='flex justify-between'>
            <p className='text-gray-700'>Shipping</p>
            <p className='text-gray-700'>$4.99</p>
          </div>
          <hr className='my-4'></hr>
          <div className='flex justify-between'>
            <p className='text-lg font-bold'>Total</p>
            <div className=''>
              <p className='mb-1 text-lg font-bold'>$134.98 USD</p>
              <p className='text-sm text-gray-700'>including VAT</p>
            </div>
          </div>
          <button className='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600'>Check out</button>
        </div>
      </div>
    </div>
  );
}
