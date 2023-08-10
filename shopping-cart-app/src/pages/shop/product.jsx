import React from 'react'

export const Product = (props) => {
    const { id, title, price, description, category, image } = props.data;
    return (
        <div className='product mt-4 flex justify-between flex-col'>
            <img src={image} alt={title} className='MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img w-full css-1ri5oru'/>
            <div className='description'>                
                <p>{title}</p>
                <p className='text-sm font-medium text-gray-900'><b>${price}</b></p>
                <p>{category}</p>
            </div>

        </div>
    )
}