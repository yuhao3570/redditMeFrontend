import React, { useEffect } from 'react';
// import { connect } from 'react-redux';

export default function PostDetail({post, comments}) {
  
  return (
    <>
      <h1>{post.title}</h1>
    </>
  )
}

const mapStateToProps = ({commentReducer}) => {
  return {
    comments: commentReducer.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: () => {dispatch(getAllCommentsAction())}
  }
}