interface Company {
    id: string;
    name: string;
    logoUrl: string;
    address: string;
    contactNumber: string;
    email: string;
    products: Product[];
    quotes: Quote[];
}

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    classification: string;
}

interface Quote {
    id: string;
    companyId: string;
    createdBy: string;
    createdAt: Date;
    items: QuoteItem[];
    totalAmount: number;
}

interface QuoteItem {
    productId: string;
    quantity: number;
    price: number;
}