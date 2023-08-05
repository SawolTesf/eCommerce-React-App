import React from 'react'

export const Product = (props) => {
    const { id, title, price, description, category, image } = props.data;

    return (
        <div className='products'>
            <div className='item'>
                <p>{id}</p>
                <p>{title}</p>
                <p>{price}</p>
                <p>{description}</p>
                <p>{category}</p>
                <img src={image} alt={title} />            
            </div>

        </div>
    )
}