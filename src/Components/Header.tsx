import { Link } from 'react-router-dom'
import myLogo from '../assets/image/myLogo.png'
import { FaBasketShopping } from "react-icons/fa6";
import '../index.css'
import { useCartStore } from '../Store/CartStore';


const Header = () => {
    const cartCount = useCartStore((state) => state.cart.length)
    
    return (
        <header>
            <Link to="/">
                <img src={myLogo} width={200} alt="Logo" />
            </Link>
            <div className='myNav'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                    <div className="myNav-right">
                        <Link to="/cart" style={{ position: "relative" }}>
                            <FaBasketShopping />
                            {cartCount > 0 && (
                                <span className='cart-push'>
                                    {cartCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </nav>
            </div>

        </header>
    )
}

export default Header