import React from 'react';
import { connect } from 'react-redux';
import deleteCommentAction from '../actions/commentActions/DeleteCommentAction';
import updateCommentVoteAction from '../actions/commentActions/UpdateCommentVoteAction';
import '../styles/CommentItem.css';

function CommentViewer({post, comment, deleteComment, changeVote}) {
  const {comment_id, content, owner_id, score} = comment;

  const handleVote = (event) => {
    event.preventDefault();
    changeVote(comment_id, event.target.alt);
  }

  return (
    <div 
      className="comment-item" 
      id={comment_id}
    >
      <div className='comment-score'>
        <img 
          alt="UPVOTE" 
          src="/arrows/upvote.png"
          onClick={handleVote}>
        </img>
        <p>{score}</p>
        <img 
          alt="DOWNVOTE" 
          src="/arrows/downvote.png"
          onClick={handleVote}>
        </img>
      </div>
      
      <div className="comment">
        <p className="comment-content">{content}</p>
        <div className="comment-footer">
          <span className="comment-signature">Created by {owner_id}</span>
          <span className="remove-comment"
            onClick={() => deleteComment(post.post_id, comment.comment_id)}>Remove</span>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteComment: (post_id, comment_id) => {dispatch(deleteCommentAction(post_id, comment_id))},
    changeVote: (post_id, action) => {dispatch(updateCommentVoteAction(post_id, action))}
  }
}

export default connect(null, mapDispatchToProps)(CommentViewer);