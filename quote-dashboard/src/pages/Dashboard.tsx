import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import QuoteList from '../components/QuoteList';
import FiltersPanel from '../components/FiltersPanel';
import './Dashboard.css'; // Optional: Add styles specific to the dashboard

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
            <Header />
            <div className="dashboard-content">
                <Sidebar />
                <main className="main-area">
                    <FiltersPanel />
                    <ProductList />
                    <QuoteList />
                </main>
            </div>
        </div>
    );
};

export default Dashboard;