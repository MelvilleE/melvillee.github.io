import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Quotes from './pages/Quotes';
import Products from './pages/Products';
import Settings from './pages/Settings';
import Login from './pages/Login';
import './index.css';

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <div className="main-content">
                    <Sidebar />
                    <Switch>
                        <Route path="/" exact component={Login} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/quotes" component={Quotes} />
                        <Route path="/products" component={Products} />
                        <Route path="/settings" component={Settings} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;