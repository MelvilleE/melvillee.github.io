import React from 'react';
import { Quote } from '../types/quote';

interface QuotePreviewProps {
    quote: Quote;
}

const QuotePreview: React.FC<QuotePreviewProps> = ({ quote }) => {
    return (
        <div className="quote-preview">
            <h2>Quote Preview</h2>
            <div className="quote-details">
                <h3>{quote.title}</h3>
                <p><strong>Client:</strong> {quote.clientName}</p>
                <p><strong>Date:</strong> {new Date(quote.date).toLocaleDateString()}</p>
                <p><strong>Total:</strong> ${quote.total.toFixed(2)}</p>
            </div>
            <div className="quote-items">
                <h4>Items</h4>
                <ul>
                    {quote.items.map((item, index) => (
                        <li key={index}>
                            {item.productName} - ${item.price.toFixed(2)} x {item.quantity}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="quote-notes">
                <h4>Notes</h4>
                <p>{quote.notes}</p>
            </div>
        </div>
    );
};

export default QuotePreview;