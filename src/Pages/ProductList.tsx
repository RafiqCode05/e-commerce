import { useEffect, useState } from "react"
import { useProductStore } from "../Store/ProductStore"
import { filterProducts } from "../Store/productFilter"
import { useCartStore } from "../Store/CartStore"
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";
import type { Product } from "../Type/Product";


const ProductList = () => {
    const products = useProductStore((state) => state.products)
    const getProducts = useProductStore((state) => state.getProducts) 
    const addToCart = useCartStore((state) => state.addToCart) 
    const removeFromCart = useCartStore((state) => state.removeFromCart) 
    const [search, setSearch] = useState<string>('') 
    const [flyingId, setFlyingId] = useState<number | null>(null) // Animasiya üçün state

    const handleAddToCart = (product: Product): void => {
        addToCart(product); // Məhsulu səbətə əlavə et
        setFlyingId(product.id); // Animasiya üçün id-ni yadda saxla
        setTimeout(() => setFlyingId(null), 700) // 0.7 saniyə sonra animasiyanı sıfırla
        toast.success(
            <span>
                {product.title} səbətə əlavə olundu
                <button className="undo-button" onClick={() => {
                    removeFromCart(product.id); 
                    toast.dismiss() 
                }}>Geri al</button>
            </span>,
            { autoClose: 2500 } 
        );
    }

    useEffect(() => {
        getProducts() // Komponent yüklənəndə məhsulları gətir
    }, [getProducts])

    const filtered = filterProducts(products, search) // Məhsulları axtarışa görə filterləyir
    return (
        <div>
            {/* Məhsul axtarış inputu */}
            <input
                className="product-input"
                type="text"
                placeholder="Search Product..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            {/* Məhsul siyahısı */}
            <div className="product-list">
                {filtered.map((product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.title} /> {/* Məhsul şəkli */}
                        <h3>
                            {product.title} {/* Məhsul adı */}
                        </h3>
                        <p>
                            {product.price} $ {/* Məhsul qiyməti */}
                        </p>
                        {/* Səbətə at düyməsi və animasiya */}
                        <button className="button-relative" onClick={() => handleAddToCart(product)} >
                            {flyingId === product.id ? (
                                <span className="fly-anim">
                                    <FaShoppingCart /> {/* Animasiya zamanı ikon */}
                                </span>
                            ) : (
                                "Səbətə at" // Normal vəziyyətdə yazı
                            )}
                        </button>
                    </div>
                )))}
            </div>
        </div>
    )
}

export default ProductList 