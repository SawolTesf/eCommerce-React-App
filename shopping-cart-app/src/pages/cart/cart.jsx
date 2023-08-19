import React, {useState, useEffect, useContext} from 'react'
import { getProducts } from '../../products';
import { CartItem } from './cartItem';
import { ShopContext } from '../../context/shop-context';

export const Cart = () => {
  const {cartItems, clearCart} = useContext(ShopContext); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  // Calculate subtotal based on items in cart
  let subtotal = products.reduce((acc, product) => acc + product.price * cartItems[product.id], 0);

  // Calculate total based on subtotal and shipping cost
  let shippingCost = subtotal > 0 ? 4.99 : 0;
  let total = subtotal + shippingCost;

  return (
    <div className='Cart bg-gray-100 pt-20 min-h-screen'>
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
        {/* Only show checkout div if there are items in cart */}
        {subtotal > 0 && (
          <div className='mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
            <div className='mb-2 flex justify-between'>
              <p className='class="text-gray-700 mr-4'>Subtotal</p>
              <p className='class="text-gray-700'>${subtotal.toFixed(2)}</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-gray-700 mr-4'>Shipping</p>
              <p className='text-gray-700'>${shippingCost.toFixed(2)}</p>
            </div>
            <hr className='my-4'></hr>
            <div className='flex justify-between'>
              <p className='text-lg font-bold mr-4'>Total</p>
              <div className=''>
                <p className='mb-1 text-lg font-bold'>${total.toFixed(2)} USD</p>
                <p className='text-sm text-gray-700'>including VAT</p>
              </div>
            </div>
            {/* Clear cart and show pop-up message when "Check out" button is clicked */}
            <button className='mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600' onClick={() => { clearCart(); alert("Thank you for shopping!"); }}>Check out</button>
          </div>
        )}
      </div>
      {/* Show message if cart is empty */}
      {subtotal === 0 && (
        <div className='text-center text-3xl font-bold mt-10'>
          <p>Your cart is empty.</p>
        </div>
      )}
    </div>
  );
}
