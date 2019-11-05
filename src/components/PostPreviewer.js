import React from 'react';
import '../styles/PostPreviewer.css';

export default function PostPreviewer({post}) {
  let timestamp = Math.floor(Date.now()/60000) - post.timeUpdated;
  return (
    <div className="post-item">
      <div className='vote-score'>
        <img alt="upvote" src="/arrows/upvote.png"></img>
        <p>{post.score}</p>
        <img alt="downvote" src='/arrows/downvote.png'></img>
      </div>
      
      <div className="post">
        <h2>{post.title}</h2>
        <div className="post-footer">
          <p>Submitted <strong>{timestamp}</strong> minutes ago by <strong>{post.owner_id}</strong></p>
          <span>Modify</span>
          <span>Remove</span>
          <span>Comment</span>
        </div>
      </div>
    </div>
  )
}