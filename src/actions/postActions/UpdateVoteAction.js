export default function updatePostVoteAction(post_id, voteType){
  return async (dispatch) => {
    dispatch({type: `${voteType}_POST_START`});
    try{
      await fetch(`http://localhost:8080/posts/${post_id}/${voteType.toLowerCase()}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
      })
      dispatch({
        type: `${voteType}_POST_SUCCESS`,
        post_id,
      });
    }catch(error){
      console.log(error);
    }
  }
}