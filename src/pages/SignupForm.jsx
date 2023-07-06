import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';

function SignupForm() {
    const [memberType, setMemberType] = useState(''); // Fill the initial value appropriately
    const [memberEmail, setMemberEmail] = useState('');
    const [memberPassword, setMemberPassword] = useState('');
    const [memberConfirmPassword, setMemberConfirmPassword] = useState('');
    const [memberName, setMemberName] = useState('');
    const [memberGender, setMemberGender] = useState('');
    const [memberTelNo, setMemberTelNo] = useState('');
    const [memberBirthDt, setMemberBirthDt] = useState(null);
    const [agreedTerms, setAgreedTerms] = useState(false);
    const navigate = useNavigate();

    function handleSignup(event) {
        event.preventDefault();
        // 아래의 코드는 가상의 예시로, 실제 회원가입 로직에 따라 작성하셔야 합니다.
        // let isSuccess = signup(); // 가입 성공 여부 확인
        // if (isSuccess) {
        //     window.location.href = "/login"; // 가입 성공 시 로그인 페이지로 이동
        // }
    }

    function checkEmailDuplicate() {
        // Implement email checking logic
    }

    return (
        <div className="SignupForm" style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>회원가입</h2>
            <Select id="type-input" label="Type" variant="outlined" value={memberType} onChange={e => setMemberType(e.target.value)}>
                <MenuItem value="actor">배우</MenuItem>
                <MenuItem value="model">모델</MenuItem>
                <MenuItem value="voiceActor">성우</MenuItem>
            </Select>
            <TextField id="email-input" label="Email" variant="outlined" value={memberEmail} onChange={e => setMemberEmail(e.target.value)} />
            <Button onClick={checkEmailDuplicate}>중복 확인</Button>
            <TextField id="password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" value={memberPassword} onChange={e => setMemberPassword(e.target.value)} />
            <TextField id="confirmPassword-input" label="Confirm Password" type="password" autoComplete="current-password" variant="outlined" value={memberConfirmPassword} onChange={e => setMemberConfirmPassword(e.target.value)} />
            
            <TextField id="name-input" label="Name" variant="outlined" value={memberName} onChange={e => setMemberName(e.target.value)} />
            <RadioGroup row value={memberGender} onChange={e => setMemberGender(e.target.value)}>
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
            <TextField id="telNo-input" label="Tel No" variant="outlined" value={memberTelNo} onChange={e => setMemberTelNo(e.target.value)} />
            <TextField id="birthdate-input" label="Birthdate" type="date" InputLabelProps={{ shrink: true }} value={memberBirthDt} onChange={e => setMemberBirthDt(e.target.value)} />
            <FormControlLabel control={<Checkbox checked={agreedTerms} onChange={e => setAgreedTerms(e.target.checked)} />} label="I agree to the terms and conditions" />
            <Button variant="contained" color="primary" onClick={handleSignup}>회원 가입</Button>
            <Button variant="outlined" color="primary" onClick={() => navigate('/login')}>로그인 페이지로 이동</Button>
        </div>
    );
}

export default SignupForm;