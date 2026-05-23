interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    classification: string;
    imageUrl?: string; // Optional field for product image
    createdAt: Date;
    updatedAt: Date;
}

interface ProductList {
    products: Product[];
    totalCount: number;
    currentPage: number;
    totalPages: number;
}

export type { Product, ProductList };