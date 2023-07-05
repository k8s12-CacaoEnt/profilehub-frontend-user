import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function SignupForm() {
    return (
        <div className="SignupForm">
            <h2>Signup Form</h2>
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" />
            <Button variant="contained" color="primary">Sign up</Button>
        </div>
    );
}

export default SignupForm;
