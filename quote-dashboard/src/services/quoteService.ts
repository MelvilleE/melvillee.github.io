import { Quote } from '../types/quote';
import { api } from './api';

const QUOTE_API_URL = '/api/quotes';

export const quoteService = {
    createQuote: async (quote: Quote): Promise<Quote> => {
        const response = await api.post(QUOTE_API_URL, quote);
        return response.data;
    },

    getQuotes: async (): Promise<Quote[]> => {
        const response = await api.get(QUOTE_API_URL);
        return response.data;
    },

    getQuoteById: async (id: string): Promise<Quote> => {
        const response = await api.get(`${QUOTE_API_URL}/${id}`);
        return response.data;
    },

    updateQuote: async (id: string, quote: Quote): Promise<Quote> => {
        const response = await api.put(`${QUOTE_API_URL}/${id}`, quote);
        return response.data;
    },

    deleteQuote: async (id: string): Promise<void> => {
        await api.delete(`${QUOTE_API_URL}/${id}`);
    },

    filterQuotes: async (filters: any): Promise<Quote[]> => {
        const response = await api.get(QUOTE_API_URL, { params: filters });
        return response.data;
    }
};