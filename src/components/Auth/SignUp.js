import React, { useState } from 'react';

const SignUp = () => {
  const [businessEmail, setBusinessEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')
  const [businessName, setBusinessname] = useState('');

  const signUpPageStyle = {
    margin: '0',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  }

  const formContainerStyle = {
    height: '400px',
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
  

  const onSignUp = (e) => {
    e.preventDefault();
    fetch('http://localhost:3200/api/business-auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ businessEmail, password, businessName })
    })
    .then((response) => {
        if (response.ok) {
            console.log('User signed up successfully');
          } else {
            response.json().then((data) => {
              console.error('Failed to sign up:', data.message)
            });
          }
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    })
}

  return (
    <div style={signUpPageStyle}>
      <form onSubmit={onSignUp} style={formContainerStyle}>
      <label style={labelStyle}> Create your business account here! </label>
        <input
          type="text"
          value={businessName}
          placeholder="Username"
          style={inputStyle}
          onChange={(e) => setBusinessname(e.target.value)}
        />
        <input
          type="email"
          value={businessEmail}
          placeholder="Email"
          style={inputStyle}
          onChange={(e) => setBusinessEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          style={inputStyle}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          value={confirmPassword}
          placeholder="Confirm Password"
          style={inputStyle}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit" style={submitBtnStyle}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
