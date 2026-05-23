import React, { useState } from 'react';
import { Quote } from '../types/quote';
import { Product } from '../types/product';
import { ClassificationBadge } from './ClassificationBadge';
import { QuotePreview } from './QuotePreview';

const QuoteEditor: React.FC = () => {
    const [quote, setQuote] = useState<Quote>({
        id: '',
        clientName: '',
        products: [],
        total: 0,
        createdAt: new Date(),
    });

    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [previewVisible, setPreviewVisible] = useState(false);

    const handleProductSelect = (product: Product) => {
        setSelectedProducts((prev) => [...prev, product]);
        updateTotal([...selectedProducts, product]);
    };

    const updateTotal = (products: Product[]) => {
        const total = products.reduce((acc, product) => acc + product.price, 0);
        setQuote((prev) => ({ ...prev, total }));
    };

    const handleQuoteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setQuote((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Logic to save the quote goes here
        console.log('Quote submitted:', quote);
    };

    return (
        <div className="quote-editor">
            <h2>Create/Edit Quote</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="clientName">Client Name</label>
                    <input
                        type="text"
                        id="clientName"
                        name="clientName"
                        value={quote.clientName}
                        onChange={handleQuoteChange}
                        required
                    />
                </div>
                <div>
                    <h3>Products</h3>
                    {selectedProducts.map((product) => (
                        <div key={product.id}>
                            <ClassificationBadge classification={product.classification} />
                            <span>{product.name} - ${product.price}</span>
                        </div>
                    ))}
                </div>
                <button type="button" onClick={() => setPreviewVisible(true)}>
                    Preview Quote
                </button>
                <button type="submit">Save Quote</button>
            </form>
            {previewVisible && <QuotePreview quote={quote} />}
        </div>
    );
};

export default QuoteEditor;