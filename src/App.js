import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getAllPostsAction from './actions/GetAllPostsAction';
import Header from './components/Header';
import PostPreviewer from './components/PostPreviewer';
import './styles/Header.css';

const styles ={
  posts: {
    marginTop: '70px',
    marginLeft: '20px',
    width: '60%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    fontFamily: "lato"
  },
  p : {
    fontSize: '25px',
    margin: '0px',
    marginLeft: '10px'
  }
}

function App({posts, getAllPosts}) {
  useEffect(getAllPosts, []);

  return (
    <>
      <Header />
      <div className="posts" style={styles.posts}>
        <p style={styles.p}>Popular Posts</p>
        {posts.map(post => <PostPreviewer key={post.post_id} post={post}/>)}
      </div>

      <div className="">

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
