import React from 'react';
import { connect } from 'react-redux';
import deletePostAction from '../actions/postActions/DeletePostAction';
import updatePostVoteAction from '../actions/postActions/UpdateVoteAction';
import '../styles/PostPreviewer.css';

function PostPreviewer({post, deletePostById, changeVote, history}) {
  let timestamp = Math.floor(Date.now()/60000) - post.timeUpdated;

  const navToModifyPostForm = (event) => {
    event.preventDefault();
    history.push(`/edit/${post.post_id}`);
  }

  const handleVote = (event) => {
    event.preventDefault();
    changeVote(post.post_id, event.target.alt);
  }

  const navToPostDetail = (event) => {
    event.preventDefault();
    // history.push(`/detail/${post.post_id}`);
  }

  return (
    <div 
      className="post-item" 
      id={post.post_id}
      onClick={navToPostDetail}
    >
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
          <span history={history} onClick={navToModifyPostForm}>Modify</span>
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