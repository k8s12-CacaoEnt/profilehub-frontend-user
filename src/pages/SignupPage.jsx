import React from 'react';
import SignupForm from './SignupForm';
import SignupProgress from './SignupProgress';

function SignupPage() {
    return (
        <div className="SignupPage">
            <h1>Signup Page</h1>
            <SignupForm />
            <SignupProgress />
            <button>Signup</button>
        </div>
    );
}

export default SignupPage;
