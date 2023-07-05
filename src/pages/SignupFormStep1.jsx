import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignupFormStep1() {
    // Define necessary states here like setEmail, setPassword, setPasswordCheck
    // Implement form validation accordingly
    // Make API call to check email duplication 

    return (
        <div className="SignupFormStep1">
            <h2>Step 1</h2>
            <TextField id="email-input" label="Email" variant="outlined" />
            <TextField id="password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" />
            <TextField id="password-check-input" label="Password Check" type="password" autoComplete="current-password" variant="outlined" />
        </div>
    );
}

export default SignupFormStep1;
