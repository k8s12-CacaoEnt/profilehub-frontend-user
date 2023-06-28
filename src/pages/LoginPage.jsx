import React from 'react';
import LoginForm from './LoginForm';
import LoginError from './LoginError';

function LoginPage() {
    return (
        <div className="LoginPage">
            <h1>Login Page</h1>
            <LoginForm />
            <LoginError />
            <button>Login</button>
        </div>
    );
}

export default LoginPage;
