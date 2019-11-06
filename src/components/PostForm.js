import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import submitPostAction from '../actions/SubmitPostAction';
import updatePostAction from '../actions/UpdatePost';
import '../styles/NewPost.css';

const initPost = {
  title: '',
  url: ''
}

function PostForm({allPosts, submitPost, updatePost, history, match}) {
  const [post, setPost] = useState(initPost);
  const post_id = parseInt(match.params.post_id);

  useEffect(()=> {
    if(post_id !== undefined){
      setPost({
        ...allPosts.find(post => post.post_id === post_id)
      });
    }
  }, [allPosts, post_id])

  const handlePostSubmit = () => {
    if(validated(post)){
      if(post_id !== undefined){
        updatePost(post);
      }else{
        submitPost(post);
      }
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

const mapStateToProps = ({postReducer}) => {
  return {
    allPosts: postReducer.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitPost: (post) => {dispatch(submitPostAction(post))},
    updatePost: (post) => {dispatch(updatePostAction(post))}

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);