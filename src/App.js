import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Main from './components/main'
import About from './components/about'
import Contact from './components/contact'
import NoPage from './components/nopage';
import Cart from './components/cart';
import data from './components/data'
import Slider from './components/slider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  const [cartItems, setCartItems] = useState([])
  const [cartMessage, setCartMessage] = useState(false)
  const [productCount, setProductCount] = useState(0)
  const [totalAmount, setTotalAmount] = useState()

  const { products } = data

  useEffect(() => {
    setTimeout(() => {
      setCartMessage(false)
    }, 3000)
  })

  const onSelect = (product, index) => {


    const productExist = cartItems.find(x => x.id === product.id);
    if (productExist) {
      setCartItems(cartItems.map((item) => item.id === product.id ?
        { ...productExist, qty: productExist + 1 } : item)
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
    setCartMessage(true)
    setProductCount(productCount + 1)
    const result = productCount + 1
    if (result) {

      setTotalAmount(result * product.amount)
    }

  }
  const onRemove = (product) => {
    console.log(product, "afsdfasdf")
    const itemExist = cartItems.find((x) => x.id === product.id)
    if (itemExist.id === product.id) {
      setCartItems(cartItems.filter(x => x.id !== product.id))
    } else {
      setCartItems(cartItems.map((x) => x.id === product.id ?
        { ...itemExist, qty: itemExist.qty - 1 } : x)
      );
    }
    setProductCount(productCount === 0)

  }

  const IncreaseItems = (product) => {
    setProductCount(
      productCount + 1
    )
    const result = productCount + 1
    if (result) {

      setTotalAmount(result * product.amount)
    }
  }

  const decreaseItems = (product) => {
    console.log(product, "dsfsad")
    const itemExist = cartItems.find((x) => x.id === product.id)
    if (productCount === product.id) {
      setCartItems(cartItems.filter(x => x.id !== product.id))
    } else {
      setProductCount(
        productCount - 1
      )
    }
    setProductCount(productCount - 1)
    const result = productCount - 1
    if (result) {

      setTotalAmount(result * product.amount)
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header productCount={productCount} />
        <Slider />
        <Routes>
          <Route path='/' element={<Main products={products} onSelect={onSelect} cartMessage={cartMessage} />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/cart' element={<Cart cartItem={cartItems}
            onSelect={onSelect}
            onRemove={onRemove}
            IncreaseItems={IncreaseItems}
            decreaseItems={decreaseItems}
            productCount={productCount}
            totalAmount={totalAmount}
          />}
          />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
