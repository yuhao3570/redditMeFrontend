export default function updateCommentVoteAction(post_id, comment_id, voteType){
  return async (dispatch) => {
    dispatch({type: `${voteType}_COMMENT_START`});
    try{
      await fetch(`http://localhost:8080/posts/${post_id}/comments/${comment_id}/${voteType.toLowerCase()}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
      })
      dispatch({
        type: `${voteType}_COMMENT_SUCCESS`,
        comment_id,
      });
    }catch(error){
      console.log(error);
    }
  }
}