import {create} from 'zustand';
import type {Product} from '../Type/Product';



interface ProductStore {
    products: Product[];
    selectedProduct: Product | null;
    getProducts: ()=>Promise<void>;
    getProductById: (id: number) => Promise<void>;
}


export const useProductStore = create<ProductStore>((set) => ({
    products: [],
    selectedProduct: null,
    getProducts: async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        set({products: data});
    },
    getProductById: async (id) =>{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        set({selectedProduct: data});
    }
}))