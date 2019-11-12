import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getAllCommentsAction from '../actions/commentActions/getAllCommentsAction';
import CommentsViewer from './CommentsViewer';
import Sidebar from './Sidebar';
import '../styles/PostDetail.css';

function PostDetail({posts, comments, getComments, match, history}) {
  let post_id = parseInt(match.params.post_id);
  useEffect(() => {
    getComments(post_id);
  }, [getComments, post_id]);
  const postTodisplay = posts.find(post => post.post_id===post_id);

  return (
    <div className='post-detail'>
      <div className="detail-content">
        <h2 className="post-title">{postTodisplay.title}</h2>
        <CommentsViewer post_id={post_id} comments={comments}/>
      </div>
      <Sidebar history={history} type="COMMENT" post_id={post_id}/>
    </div>
  )
}

const mapStateToProps = ({postReducer, commentReducer}) => {
  return {
    posts: postReducer.posts,
    comments: commentReducer.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getComments: (post_id) => {dispatch(getAllCommentsAction(post_id))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)