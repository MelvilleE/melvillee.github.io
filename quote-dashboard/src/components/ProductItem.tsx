import React from 'react';
import { Product } from '../types/product';
import ClassificationBadge from './ClassificationBadge';

interface ProductItemProps {
    product: Product;
    onSelect: (productId: string) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onSelect }) => {
    const handleSelect = () => {
        onSelect(product.id);
    };

    return (
        <div className="product-item" onClick={handleSelect} style={styles.container}>
            <img src={product.imageUrl} alt={product.name} style={styles.image} />
            <div style={styles.details}>
                <h3 style={styles.title}>{product.name}</h3>
                <ClassificationBadge classification={product.classification} />
                <p style={styles.price}>${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        border: '1px solid #e6eef8',
        borderRadius: '8px',
        marginBottom: '12px',
        cursor: 'pointer',
        transition: 'background-color 0.2s',
    },
    image: {
        width: '80px',
        height: '80px',
        borderRadius: '8px',
        marginRight: '16px',
    },
    details: {
        flex: 1,
    },
    title: {
        margin: '0 0 8px',
        fontSize: '16px',
        color: '#0f172a',
    },
    price: {
        margin: '0',
        fontSize: '14px',
        color: '#2b6cb0',
    },
};

export default ProductItem;