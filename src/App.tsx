import './App.css'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from './Components/Header'
import About from './Components/About';
import Home from './Components/Home';
import Cart from './Pages/Cart'
import ProductList from './Pages/ProductList'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer';

function App() {


  return (
    <>
      <div>

        <Header />
        <ToastContainer position="top-right" pauseOnHover={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <Footer />

      </div>
    </>
  )
}

export default App
