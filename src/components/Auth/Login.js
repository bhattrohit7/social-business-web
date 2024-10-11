import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginPageStyle = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
    }

    const loginFormStyle = {
        height: '300px',
        width: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4c9ce',
        flexDirection: 'column'
    }

    const labelStyle = {
        color: '#000',
        marginBottom: '25px'
    }

    const inputStyle = {
        width: '60%',
        height: '25px',
        marginBottom: '20px'
    }

    const submitBtnStyle = {
        backgroundColor: '#33658a',
        color: '#fff',
        width: '100px',
        height: '35px',
        borderRadius: '5px',
        border: 'none'
    }

    const onLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div style={loginPageStyle}>
            <form onSubmit={onLogin} style={loginFormStyle}>
                <label style={labelStyle}> Pleae login using your credentials</label>
                <input 
                    type="text"
                    value={email}
                    placeholder="Please enter your email id"
                    style={inputStyle}
                    onChange={(e) => setEmail(e.target.email)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Please enter your password"
                    style={inputStyle}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" style={submitBtnStyle}>Sign Up</button>
            </form>
        </div>
    )
}

export default Login;