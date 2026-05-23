import { useState } from 'react';

const storedUsername = 'admin';
const storedPassword = 'password123'; // demo-only: do NOT use hard-coded credentials in production

export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        if (username === storedUsername && password === storedPassword) {
            // Simulate successful login
            setTimeout(() => {
                resolve({ success: true, message: 'Login successful' });
            }, 500);
        } else {
            // Simulate failed login
            setTimeout(() => {
                reject({ success: false, message: 'Invalid username or password' });
            }, 500);
        }
    });
};

export const logout = () => {
    return new Promise((resolve) => {
        // Simulate logout
        setTimeout(() => {
            resolve({ success: true, message: 'Logout successful' });
        }, 500);
    });
};

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = async (username, password) => {
        try {
            const response = await login(username, password);
            if (response.success) {
                setIsAuthenticated(true);
            }
            return response;
        } catch (error) {
            return error;
        }
    };

    const handleLogout = async () => {
        const response = await logout();
        if (response.success) {
            setIsAuthenticated(false);
        }
        return response;
    };

    return { isAuthenticated, handleLogin, handleLogout };
};