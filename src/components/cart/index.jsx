import React from 'react'

import './index.css'

const Cart = (props) => {

    const { cartItem, onRemove, decreaseItems, IncreaseItems, productCount, totalAmount, productPrice } = props




    return (
        <div className="cart">
            <h4>Cart Items</h4>
            <div className='emptyCart'>
                {
                    cartItem.length === 0 && <div >Your Cart is Empty</div>
                }
            </div>
            <div>
                {cartItem.map((item, id) => {
                    return (
                        <table key={item}>
                            <thead>
                                <th>Article</th>
                                <th>Title</th>
                                <th>Amount</th>
                                <th>Total Items</th>
                                <th>Action</th>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><img src={item.url} alt="img" className='cart-image' /></td>
                                    <td>{item.title}</td>
                                    <td>{item.amount}</td>
                                    <td>{productCount}</td>
                                    <td>{totalAmount}</td>
                                    <td>
                                        <button onClick={() => IncreaseItems( item)}>+</button>
                                       
                                        <button onClick={() => decreaseItems(item)}>-</button>
                                    </td>
                                    <td>
                                        <button onClick={() => onRemove(item)}>Remove</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    )
                })}
            </div>

        </div>

    )
}
export default Cart;