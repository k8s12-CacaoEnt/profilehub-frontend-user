import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function LoginForm({ username, setUsername, password, setPassword, handleLogin }) {
    return (
        <div className="LoginForm">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={e => setUsername(e.target.value)} value={username} />
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                        <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" onChange={e => setPassword(e.target.value)} value={password} />
                        <Button type="submit" variant="contained" color="primary">Login</Button>
                    </Box>
                </Box>
            </form>
        </div>
    );
}

export default LoginForm;