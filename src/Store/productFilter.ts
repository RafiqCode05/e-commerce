import type { Product } from "../Type/Product";



export function filterProducts(products: Product[], search: string) {
    return products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase()) // Məhsulu kiçik hərflərlə axtar
    )
}