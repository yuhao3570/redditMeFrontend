import React from 'react';
import '../styles/Sidebar.css';

export default function Sidebar({history, type, post_id}) {
  const formType = {
    COMMENT: `/detail/${post_id}/comments/new`,
    POST: '/new/post'
  }

  const navToForm = (event) => {
    event.preventDefault();
    history.push(`${formType[type]}`);
  }

  return (
    <div className='sidebar'>
      <button
        className='submit-post'
        onClick={navToForm}
      >SUBMIT A NEW {type}</button>
      <div className="about">
        <h3>ABOUT</h3>
        <p>{"Add later"}</p>
      </div>
    </div>
  )
}