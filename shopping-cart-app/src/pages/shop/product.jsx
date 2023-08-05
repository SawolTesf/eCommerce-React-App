import React from 'react'

export const Product = (props) => {
    const { id, title, price, description, category, image } = props.data;
    return (
        <div className='product mt-4 flex justify-between flex-col'>
            <img src={image} alt={title} className='h-full w-full object-cover object-center lg:h-full lg:w-full'/>
            <div className='description'>                
                <p className="absolute inset-0">{title}</p>
                <p className='text-sm font-medium text-gray-900'><b>${price}</b></p>
                <p>{category}</p>
            </div>

        </div>
    )
}