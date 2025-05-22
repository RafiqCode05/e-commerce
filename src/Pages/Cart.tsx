import { useCartStore } from "../Store/CartStore"
import type { Product } from "../Type/Product"

const Cart = () => {
    const cart = useCartStore((state) => state.cart) 
    const removeFromCart = useCartStore((state) => state.removeFromCart) // Səbətdəki məhsulları silmək üçün funksiya

    const total = cart.reduce((sum, product) => sum + product.price * (product.count || 1),0) // Səbətdəki məhsulların qiymətlərinin cəmini hesablayırıq
    return (
        <div style={{ maxWidth: 800, margin: "40px auto" }}>
            <h1 className="cart-title">
                Səbət
            </h1>
            {cart.length === 0 && <p className="cart-empty">Səbət boşdur</p>}

            {cart.length > 0 && (
                <div className="cart-total">
                    Ümumi məbləğ: <span>${total.toFixed(2)}</span>
                </div>
            )}
            <div className="cart-list">
                {cart.map((product:Product, index) => (
                    <div className="cart-card" key={index}>
                        <img src={product.image} alt={product.title} />
                        <span>{product.title}</span>
                        <span>{product.price} $</span>
                        <div className="cart-count">
                            Say: {product.count || 1}
                        </div>
                        <button className="cart-button" onClick={() => removeFromCart(product.id)}>
                            Sil
                        </button>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Cart