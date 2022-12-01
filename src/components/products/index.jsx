import React from 'react'
import './index.css'

function Product(props) {
    const { products, onSelect, cartMessage } = props
    return (
        <div>
            <table>
                <thead>
                    <th><h2>Articel</h2></th>
                </thead>
                {products.map((item, index) => {
                    return (
                        <tbody>
                            <tr><img src={item.url} className="product-img" alt="hekko" /></tr>
                            <tr><h3>{item.title}</h3></tr>
                            <tr><h3>${item.amount}</h3></tr>
                            <tr>
                                <div class="modal-footer">

                                    <button className="product-btn" data-bs-dismiss="modal" onClick={() => onSelect(item, index)}>
                                        Add to cart
                                    </button>

                                </div>
                            </tr>
                        </tbody>

                    )
                })}

            </table>

        </div>



    )




}
export default Product

