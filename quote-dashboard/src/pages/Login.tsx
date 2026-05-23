import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css'; // Assuming you will create a separate CSS file for login styles

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault();
        // Replace with actual authentication logic
        if (username === 'admin' && password === 'password123') {
            history.push('/dashboard'); // Redirect to the dashboard on successful login
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <main className="login-container">
            <h1>Sign in to the Quote System</h1>
            <form onSubmit={handleLogin}>
                <div className="field">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit">Sign in</button>
            </form>
        </main>
    );
};

export default Login;