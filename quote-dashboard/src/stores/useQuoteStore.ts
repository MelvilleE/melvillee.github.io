import { useState, useEffect } from 'react';
import { fetchQuotes, createQuote, deleteQuote } from '../services/quoteService';
import { Quote } from '../types/quote';

const useQuoteStore = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadQuotes = async () => {
            try {
                const fetchedQuotes = await fetchQuotes();
                setQuotes(fetchedQuotes);
            } catch (err) {
                setError('Failed to load quotes');
            } finally {
                setLoading(false);
            }
        };

        loadQuotes();
    }, []);

    const addQuote = async (newQuote: Quote) => {
        try {
            const createdQuote = await createQuote(newQuote);
            setQuotes((prevQuotes) => [...prevQuotes, createdQuote]);
        } catch (err) {
            setError('Failed to create quote');
        }
    };

    const removeQuote = async (quoteId: string) => {
        try {
            await deleteQuote(quoteId);
            setQuotes((prevQuotes) => prevQuotes.filter((quote) => quote.id !== quoteId));
        } catch (err) {
            setError('Failed to delete quote');
        }
    };

    return {
        quotes,
        loading,
        error,
        addQuote,
        removeQuote,
    };
};

export default useQuoteStore;