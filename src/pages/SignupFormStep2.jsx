// SignupFormStep2.jsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function SignupFormStep2() {
    // Define necessary states here like setUsername, setGender, setTelNo, setBirthDate
    // Implement form validation accordingly
    // Make API call to check username duplication 

    return (
        <div className="SignupFormStep2" style={{ display: 'flex', flexDirection: 'column'}}>
            <h2>Step 2</h2>
            <TextField id="username-input" label="Username" variant="outlined" />
            <RadioGroup row defaultValue="male">
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
            <TextField id="telNo-input" label="Tel No" variant="outlined" />
            <TextField id="birthdate-input" label="Birthdate" type="date" variant="outlined" InputLabelProps={{ shrink: true }} />
        </div>
    );
}

export default SignupFormStep2;
