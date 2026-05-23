import React from 'react';
import CompanySettings from '../components/CompanySettings';
import ProductList from '../components/ProductList';
import QuoteList from '../components/QuoteList';
import FiltersPanel from '../components/FiltersPanel';

const Settings: React.FC = () => {
    return (
        <div className="settings-page">
            <h1>Settings</h1>
            <CompanySettings />
            <FiltersPanel />
            <ProductList />
            <QuoteList />
        </div>
    );
};

export default Settings;