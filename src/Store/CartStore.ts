import { create } from "zustand";
import type { Product } from "../Type/Product";


interface CartState {
    cart: Product[] // Səbətdəki məhsulların siyahısı
    addToCart: (product: Product) => void // Səbətə məhsul əlavə edən funksiya
    removeFromCart: (id: number) => void
}


export const useCartStore = create<CartState>((set) => ({
    cart: [], // Başlanğıcda səbət boşdur
    addToCart: (product) =>
        set((state) => ({
            cart: [...state.cart, product] // Səbətə məhsul əlavə edir
        })),
    removeFromCart: (id) =>
        set((state) => ({
            cart: state.cart.filter(product => product.id !== id) // Səbətdəki məhsulun id-si ilə silir
        }))

}))