import React from 'react';
import ProductList from '../components/ProductList';
import FiltersPanel from '../components/FiltersPanel';
import { useQuoteStore } from '../stores/useQuoteStore';

const Products: React.FC = () => {
    const { products, loading, error } = useQuoteStore(state => ({
        products: state.products,
        loading: state.loading,
        error: state.error,
    }));

    return (
        <div className="products-page">
            <h1>Products</h1>
            <FiltersPanel />
            {loading && <p>Loading products...</p>}
            {error && <p>Error loading products: {error.message}</p>}
            <ProductList products={products} />
        </div>
    );
};

export default Products;