import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

function SignupProgress({ currentStep }) {
    const progress = (currentStep / 3) * 100;

    return (
        <div className="SignupProgress">
            <p>Step {currentStep} of 3</p>
            <LinearProgress variant="determinate" value={progress} />
        </div>
    );
}

export default SignupProgress;
