import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getAllPostsAction from '../actions/postActions/GetAllPostsAction';
import PostPreviewer from './PostPreviewer';
import Sidebar from './Sidebar';
import '../styles/Home.css';

function Home({posts, getAllPosts, history} ) {
  useEffect(getAllPosts, []);
  return (
      <div className="container">
        <div className="postlist">
          <p className="post-title">Popular Posts</p>
          {posts.map(post => <PostPreviewer 
            key={post.post_id} 
            post={post}
            history={history}/>)
          }
        </div>
        <Sidebar history={history} type="POST"/>
      </div>
  );
}

const mapStateToProps = ({postReducer}) => {
  return {
    posts: postReducer.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => {dispatch(getAllPostsAction())},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);