import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignupFormStep1() {
    // Define necessary states here like setEmail, setPassword, setPasswordCheck
    // Implement form validation accordingly
    // Make API call to check email duplication 

    const [email, setEmail] = useState("");

    // Define necessary states here like setEmail, setPassword, setPasswordCheck
    // Implement form validation accordingly

    const handleCheckEmail = async () => {
        // Make API call to check email duplication 
        // This is a pseudocode. Replace it with your actual API call.
        const response = await checkEmailDuplicationAPI(email);
        if (response.isDuplicated) {
            alert('This email is already in use.');
        } else {
            alert('You can use this email.');
        }
    }

    return (
        <div className="SignupFormStep1" style={{ display: 'flex', flexDirection: 'column'}}>
            <h2>Step 1</h2>
            <TextField id="email-input" label="Email" variant="outlined" />
            <Button variant="outlined" color="primary" onClick={handleCheckEmail}>Check Email</Button>
            <TextField id="password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" />
            <TextField id="password-check-input" label="Password Check" type="password" autoComplete="current-password" variant="outlined" />
        </div>
    );
}

export default SignupFormStep1;
