import React from 'react';
import Button from '@mui/material/Button';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

function LoginError({ resetStep }) {
    return (
        <div className="LoginError">
            <h3>Login Error</h3>
            <ErrorOutlineIcon size="small" color='warning' />
            <br/>
            <Button onClick={resetStep} size="small" variant="contained" color="primary">Retry</Button>
        </div>
    );
}

export default LoginError;
