import React from 'react';
import QuoteList from '../components/QuoteList';
import FiltersPanel from '../components/FiltersPanel';
import Pagination from '../components/Pagination';
import { useQuoteStore } from '../stores/useQuoteStore';

const Quotes: React.FC = () => {
    const { quotes, totalQuotes, currentPage, setCurrentPage } = useQuoteStore();

    return (
        <div className="quotes-container">
            <h1>Quotes Dashboard</h1>
            <FiltersPanel />
            <QuoteList quotes={quotes} />
            <Pagination 
                totalItems={totalQuotes} 
                currentPage={currentPage} 
                onPageChange={setCurrentPage} 
            />
        </div>
    );
};

export default Quotes;