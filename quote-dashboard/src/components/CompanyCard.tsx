import React from 'react';

interface CompanyCardProps {
    logo: string;
    name: string;
    description: string;
    quotesCount: number;
    onClick: () => void;
}

const CompanyCard: React.FC<CompanyCardProps> = ({ logo, name, description, quotesCount, onClick }) => {
    return (
        <div className="company-card" onClick={onClick} style={styles.card}>
            <img src={logo} alt={`${name} logo`} style={styles.logo} />
            <h2 style={styles.name}>{name}</h2>
            <p style={styles.description}>{description}</p>
            <p style={styles.quotesCount}>{quotesCount} Quotes Saved</p>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #e6eef8',
        borderRadius: '10px',
        padding: '16px',
        textAlign: 'center',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.2s',
    },
    logo: {
        width: '100px',
        height: 'auto',
        marginBottom: '12px',
    },
    name: {
        fontSize: '18px',
        margin: '8px 0',
    },
    description: {
        fontSize: '14px',
        color: '#6b7280',
        margin: '8px 0',
    },
    quotesCount: {
        fontSize: '12px',
        color: '#475569',
    },
};

export default CompanyCard;