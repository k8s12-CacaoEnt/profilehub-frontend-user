import React, { useState } from 'react';
import SignupFormStep1 from './SignupFormStep1';
import SignupFormStep2 from './SignupFormStep2';
import SignupFormStep3 from './SignupFormStep3';
import SignupProgress from './SignupProgress';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const handleNext = () => {
        if(step < 3) setStep(step + 1);
        else navigate("/login"); // Assuming user is redirected to dashboard after signup
    }

    const handleSignIn = () => {
        navigate("/login");
    }

    const handlePrevious = () => {
        if(step > 1) setStep(step - 1);
    }

    return (
        <div className="SignupPage">
            <h1>Signup</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {step === 1 && <SignupFormStep1 />}
                {step === 2 && <SignupFormStep2 />}
                {step === 3 && <SignupFormStep3 />}
            </div>
            <SignupProgress currentStep={step} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {step !== 1 && <Button variant="outlined" color="secondary" onClick={handlePrevious}>Back</Button>}
                {step === 1 && <Button variant="outlined" color="secondary" onClick={handleSignIn}>Do you have an ID already?</Button>}
                <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
            </div>
        </div>
    );
}

export default SignupPage;
