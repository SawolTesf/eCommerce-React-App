import React from 'react'

export const Product = (props) => {
    const { id, title, price, description, category, image } = props.data;
    console.log(id);
    console.log(description);
    return (
        <div className='product mt-4 flex flex-col items-center justify-around border border-black-300 p-5'>
            <img src={image} alt={title} className='MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img w-full css-1ri5oru h-50 object-contain'/>
            <div className='description mt-5 flex-1'>                
                <p className='h-6 overflow-hidden mb-6'>{title}</p>
                <p className='h-6 overflow-hidden mb-6'>{category}</p>
                <p className='font-bold text-xl h-6 overflow-hidden mb-6'><b>${price}</b></p>
            </div>
            <button className='addToCartbtn transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none p-2'> Add To Cart </button>
        </div>
    )

}