import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();

  const navStyle = {
    width: '100%',
    backgroundColor: '#E5E9EC',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }

  const linkStyle = {
    color: '#000',
    textDecoration: 'none',
    margin: '0 1rem',
    fontSize: '1.1rem',
    transition: 'color 0.3s ease'
  }

  const activeLinkStyle = {
    ...linkStyle,
    color: 'black',    
    padding: '15px 35px',
    backgroundColor: '#C4C9CE',
    fontWeight: 'bold',
  };

  const hoverStyle = {
    ':hover': {
      color: '#ffd700'
    }
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={location.pathname === '/' ? activeLinkStyle : linkStyle}>Home</Link>
      <Link to="/signup" style={location.pathname === '/signup' ? activeLinkStyle : linkStyle}>Sign Up</Link>
      <Link to="/login" style={location.pathname === '/login' ? activeLinkStyle : linkStyle}>Login</Link>
      <Link to="/events" style={{...linkStyle, ...hoverStyle}}>Events</Link>
      <Link to="/login" style={{...linkStyle, ...hoverStyle}}>Dashboard</Link>
    </nav>
  );
};

export default Navbar;
