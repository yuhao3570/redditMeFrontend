import React, { useState } from 'react';
import { connect } from 'react-redux';
import submitPostAction from '../actions/SubmitPostAction';
import '../styles/NewPost.css';

const initPost = {
  title: '',
  url: ''
}

function NewPost({ submitPost, history}) {
  const [post, setPost] = useState(initPost);

  const handlePostSubmit = () => {
    if(validated(post)){
      submitPost(post);
      setPost(initPost);
      history.push("/");
    }else {
      alert("title must not be empty");
    }
  }

  const handleTitleInput = (event) => {
    setPost({
      ...post,
      title: event.target.value
    })
  }

  const handleURLInput = (event) => {
    setPost({
      ...post,
      url: event.target.value
    })
  }

  return (
    <form className="newpost-form">
      <label> title <br/>
        <textarea 
          placeholder="Must not left blank"
          className="newpost-title" 
          value={post.title}
          onChange={handleTitleInput} />
      </label>
      <label> URL <br/>
        <input 
          className="newpost-url" 
          value={post.url} 
          onChange={handleURLInput}/>
      </label>
      <button 
        className="submit-post-button"
        onClick={handlePostSubmit}
      > Submit
      </button>
    </form>
  )
}

const validated = (post) => {
  return post.title !== '';
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitPost : (post) => {dispatch(submitPostAction(post))}
  }
}

export default connect(null, mapDispatchToProps)(NewPost);