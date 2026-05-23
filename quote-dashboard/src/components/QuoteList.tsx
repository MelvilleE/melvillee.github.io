import React from 'react';
import { useQuoteStore } from '../stores/useQuoteStore';
import QuoteItem from './QuoteItem';
import FiltersPanel from './FiltersPanel';
import Pagination from './Pagination';

const QuoteList: React.FC = () => {
    const { quotes, loading, error } = useQuoteStore();

    if (loading) {
        return <div>Loading quotes...</div>;
    }

    if (error) {
        return <div>Error loading quotes: {error.message}</div>;
    }

    return (
        <div>
            <h2>Saved Quotes</h2>
            <FiltersPanel />
            {quotes.length === 0 ? (
                <p>No quotes available.</p>
            ) : (
                <ul>
                    {quotes.map((quote) => (
                        <QuoteItem key={quote.id} quote={quote} />
                    ))}
                </ul>
            )}
            <Pagination />
        </div>
    );
};

export default QuoteList;