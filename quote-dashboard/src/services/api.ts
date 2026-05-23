import axios from 'axios';

const API_BASE_URL = 'https://api.yourservice.com'; // Replace with your actual API base URL

// Function to get all products
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching products: ' + error.message);
    }
};

// Function to get all quotes
export const fetchQuotes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/quotes`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching quotes: ' + error.message);
    }
};

// Function to create a new quote
export const createQuote = async (quoteData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/quotes`, quoteData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating quote: ' + error.message);
    }
};

// Function to update an existing quote
export const updateQuote = async (quoteId, quoteData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/quotes/${quoteId}`, quoteData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating quote: ' + error.message);
    }
};

// Function to delete a quote
export const deleteQuote = async (quoteId) => {
    try {
        await axios.delete(`${API_BASE_URL}/quotes/${quoteId}`);
    } catch (error) {
        throw new Error('Error deleting quote: ' + error.message);
    }
};

// Function to get company details
export const fetchCompanyDetails = async (companyId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/companies/${companyId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching company details: ' + error.message);
    }
};