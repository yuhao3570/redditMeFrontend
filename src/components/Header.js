import React from 'react';
import '../styles/Header.css';

export default function Header(props) {
  return (
    <div className="manubar">
      <img alt="app-logo" src="redditmelogo.png" className="manu-logo"/>      
      <div className="manu-actions">
        <button>All Posts</button>
        <button>Log In</button>
        <button>Sign Up</button>
        <button>My Posts</button>
      </div>
    </div>
  )
} 