import React from 'react'

export const Product = (props) => {
    const { id, title, price, description, category, image } = props.data;
    return (
        <div className='product mt-4 flex flex-col items-center justify-around border border-gray-300 p-5'>
            <img src={image} alt={title} className='MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img w-full css-1ri5oru h-50 object-contain'/>
            <div className='description mt-5 flex-1'>                
                <p>{title}</p>
                <p className='text-sm font-medium text-gray-900'><b>${price}</b></p>
                <p>{category}</p>
            </div>
            <button className='addToCartbtn font-bold'> Add To Cart </button>
        </div>
    )
    
}