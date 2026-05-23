interface Quote {
    id: string;
    companyId: string;
    products: QuoteProduct[];
    totalAmount: number;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
    status: QuoteStatus;
}

interface QuoteProduct {
    productId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
}

type QuoteStatus = 'draft' | 'sent' | 'approved' | 'rejected';