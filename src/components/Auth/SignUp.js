import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

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
    fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, username })
    })
    .then((response) => {
        if (response.ok) {
            console.log('User signed up successfully');
          } else {
            console.error('Failed to sign up');
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
          value={username}
          placeholder="Username"
          style={inputStyle}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          style={inputStyle}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          placeholder="Confirm Password"
          style={inputStyle}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" style={submitBtnStyle}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
