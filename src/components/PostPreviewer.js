import React from 'react';
import { connect } from 'react-redux';
import deletePostAction from '../actions/DeletePostAction';
import updatePostVoteAction from '../actions/UpdateVoteAction';
import '../styles/PostPreviewer.css';

function PostPreviewer({post, deletePostById, changeVote}) {
  let timestamp = Math.floor(Date.now()/60000) - post.timeUpdated;

  const handleModifyPost = () => {
    console.log('modify post clicked');
  }

  const handleVote = (event) => {
    changeVote(post.post_id, event.target.alt);
  }

  return (
    <div className="post-item" id={post.post_id}>
      <div className='vote-score'>
        <img 
          alt="UPVOTE" 
          src="/arrows/upvote.png"
          onClick={handleVote}>
        </img>
        <p>{post.score}</p>
        <img 
          alt="DOWNVOTE" 
          src="/arrows/downvote.png"
          onClick={handleVote}>
        </img>
      </div>
      
      <div className="post">
        <h2>{post.title}</h2>
        <div className="post-footer">
          <p>Submitted 
            <strong>{' ' + timestamp + ' '}</strong> minutes ago by 
            <strong>{' ' + post.owner_id  + ' '}</strong>
          </p>
          <span onClick={handleModifyPost}>Modify</span>
          <span onClick={() => deletePostById(post.post_id)}>Remove</span>
          <span>Comment</span>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePostById: (delete_id) => {dispatch(deletePostAction(delete_id))},
    changeVote: (post_id, action) => {dispatch(updatePostVoteAction(post_id, action))}
  }
}

export default connect(null, mapDispatchToProps)(PostPreviewer);