import React from 'react';
import Button from '@mui/material/Button';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function LoginError({ resetStep }) {
    return (
        <div className="LoginError">
            <h2>Login Error</h2>
            <ErrorOutlineIcon />

            <Button onClick={resetStep} variant="contained" color="primary">Retry</Button>
        </div>
    );
}

export default LoginError;
