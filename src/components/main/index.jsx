import React from 'react'
import Product from '../products'
import './index.css'

const Main = (props) => {
    const { onSelect, cartMessage, products } = props
    return (
        <div className="main">
            <Product
                products={products}
                cartMessage={cartMessage}
                onSelect={onSelect} />
        </div>


    )
}
export default Main;