import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getAllPostsAction from '../actions/GetAllPostsAction';
import Header from './Header';
import PostPreviewer from './PostPreviewer';
import Sidebar from './Sidebar';
import '../styles/Home.css';

function Home({posts, getAllPosts}) {
  useEffect(getAllPosts, []);
  return (
    <>
      <Header />
      <div className="container">
        <div className="postlist">
          <p className="post-title">Popular Posts</p>
          {posts.map(post => <PostPreviewer key={post.post_id} post={post}/>)}
        </div>
        <Sidebar />
      </div>
      
    </>
  );
}

const mapStateToProps = ({postReducer}) => {
  console.log('state', postReducer);
  return {
    posts: postReducer.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => {dispatch(getAllPostsAction())},
    // deletePost: (postId) => {dispatch(deletePostAction(postId))},
    // updatePost: (post) => {dispatch(updatePostAction(post))},
    // votePost: (post) => {dispatch(votePostAction(post))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);