import React from 'react';
import CommentItem from './CommentItem';
import '../styles/CommentsView.css';

function CommentsViewer({post_id, comments}) {  
  const renderCommetnComponent = () => {
    if(comments.length > 0){
      return comments.map(comment => <CommentItem 
        key={comment.comment_id} 
        comment={comment}
        post_id={post_id}
      />)
    }else{
      return <h3>No comments yet</h3>
    }
  }
   return (
    <div className="comments-view">
      {renderCommetnComponent ()}
    </div>
  )
}

export default CommentsViewer;