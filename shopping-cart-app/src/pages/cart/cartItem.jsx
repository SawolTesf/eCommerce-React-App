import React from 'react'
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {
  // Destructuring the data object from props
  const { id, title, price, description, category, image } = props.data;

  // Using the useContext hook to access the ShopContext
  const { addToCart, removeFromCart, cartItems } = React.useContext(ShopContext);

  // Getting the quantity of this item in the cart
  const cartItemAmount = cartItems[id];

  // Returning the JSX for the CartItem component
  return (
    <div className='product-container'>
      <div className='products rounded-lg md:w-full'>
        <div className='product justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start'>
          {/* Product image */}
          <img className='w-full rounded-lg sm:w-40' src={image} alt={title}></img>
          <div className='description sm:ml-4 sm:flex sm:w-full sm:justify-between'>
            {/* Product title */}
            <div className='title-container mt-5 sm:mt-0 flex justify-between'>
              <div className='title text-lg font-bold text-gray-900'>{title}</div>
            </div>
            <div className='quantity-cost-container mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6'>
              {/* Quantity buttons */}
              <div className='quantity flex items-center border-gray-100'>
                {/* Remove from cart button */}
                <button className='cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-red-500 hover:text-blue-50' onClick={() => removeFromCart(id)}>-</button>
                {/* Quantity display */}
                <p className='h-8 w-8 border bg-white flex items-center justify-center text-center text-xs outline-none'>{cartItemAmount}</p>
                {/* Add to cart button */}
                <button className='cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50'onClick={() => addToCart(id)}>+</button>
              </div>
              {/* Price and remove item button */}
              <div className='flex items-center space-x-4'>
                {/* Price display */}
                <p className='text-sm'>${price}</p>
                {/* Remove item button (not currently functional) */}
                <svg className='h-5 w-5 cursor-pointer duration-150 hover:text-red-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'> 
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12'></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
