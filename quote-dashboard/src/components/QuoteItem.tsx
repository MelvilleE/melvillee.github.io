import React from 'react';
import { Quote } from '../types/quote';

interface QuoteItemProps {
    quote: Quote;
    onEdit: (quoteId: string) => void;
    onDelete: (quoteId: string) => void;
}

const QuoteItem: React.FC<QuoteItemProps> = ({ quote, onEdit, onDelete }) => {
    return (
        <div className="quote-item">
            <h3>{quote.title}</h3>
            <p>{quote.description}</p>
            <p><strong>Created by:</strong> {quote.createdBy}</p>
            <p><strong>Date:</strong> {new Date(quote.createdAt).toLocaleDateString()}</p>
            <div className="quote-actions">
                <button onClick={() => onEdit(quote.id)}>Edit</button>
                <button onClick={() => onDelete(quote.id)}>Delete</button>
            </div>
        </div>
    );
};

export default QuoteItem;