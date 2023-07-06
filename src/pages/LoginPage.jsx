import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LoginError from './LoginError';
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/AuthService.js";
import Box from '@mui/material/Box';

function LoginPage() {
    const [step, setStep] = useState(1);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup');
    }

    const handleLogin = (e) => {
        e.preventDefault();

        AuthService.login({memberEmail: username, memberPassword: password}).then(
            () => {
                navigate("/");
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                console.log(resMessage);
            }
        );
    }

    

    return (
        <div className="LoginPage">
            <h1>Login</h1>

            {step === 1 && (
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={e => setUsername(e.target.value)} />
                    <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" onChange={e => setPassword(e.target.value)} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button onClick={handleSignUp} variant="outlined" color="primary">Sign Up</Button>
                        <Button onClick={handleLogin} variant="contained" color="primary">Login</Button>
                        {showError && <LoginError resetStep={() => setStep(1)} />}
                    </Box>
                </Box>
            )}
        </div>
    );
}

export default LoginPage;
