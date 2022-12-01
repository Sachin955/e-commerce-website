import React from 'react'
import { Link } from 'react-router-dom'
import site_logo from '../images/site_logo.jpg'
import cart_image from '../images/cart_image.png'
import '../header/index.css'


const Header = (props) => {
    const{productCount}=props

    return (
        <div className="header">
            <nav className="navbar">
                <div className="site-logo">
                    <Link to="/">
                        <img src={site_logo} alt="siteLogo" className='logo' />
                    </Link>
                </div>
                <ul className='header-nav'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>

                </ul>
                <div className="section-cart">
                    <div className="cart-image">
                        <Link to="/cart">
                            <img src= {cart_image} alt="" className='cart_image'/>
                            <div>{ productCount  }</div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )

}
export default Header;