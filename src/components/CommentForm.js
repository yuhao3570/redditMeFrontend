import React, { useState } from 'react';
import { connect } from 'react-redux';
import submitCommentAction from '../actions/commentActions/SubmitCommentAction';
import '../styles/NewPost.css';

const initComment = {
  content: '',
  owner_id: '',
  post_id: ''
}

function CommentForm({submitComment, history, match}) {
  const [comment, setComment] = useState(initComment);
  const post_id = parseInt(match.params.post_id);

  const handleCommentSubmit = () => {
    if(comment.content !== ''){
      submitComment(comment);
      setComment(initComment);
      history.push(`/detail/${post_id}/comments`);
    }else {
      alert("Content must not be empty");
    }
  }

  const handleCommentInput = (event) => {
    setComment({
      ...comment,
      content: event.target.value
    })
  }

  return (
    <form className="newpost-form">
      <label> Content <br/>
        <textarea 
          placeholder="Must not left blank"
          className="newpost-title" 
          value={comment.content}
          onChange={handleCommentInput} />
      </label>
      <button 
        className="submit-post-button"
        onClick={handleCommentSubmit}
      > Submit
      </button>
    </form>
    )

}

const mapDispatchToProps = (dispatch) => {
  return {
    submitComment : (post_id, comment) => {dispatch(submitCommentAction(post_id, comment))}
  }
}

export default connect(null, mapDispatchToProps)(CommentForm);