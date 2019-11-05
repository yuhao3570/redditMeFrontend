import React from 'react';
import '../styles/Sidebar.css';

export default function Sidebar() {

  return (
    <div className='sidebar'>
      <button className='submit-post'>SUBMIT A NEW POST</button>
      <div className="about">
        <h3>ABOUT</h3>
        <p>{"Add later"}</p>
      </div>
    </div>
  )
}