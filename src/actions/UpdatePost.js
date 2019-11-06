export default function updatePostAction(updatedPost){
  return async (dispatch) => {
    dispatch({type: 'UPDATE_POST_START'});
    try{
      let result = await fetch(`http://localhost:8080/posts/${updatedPost.post_id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(updatedPost)
      })
      let post = await result.json();
      dispatch({
        type: 'UPDATE_POST_SUCCESS',
        post,
      });
    }catch(error){
      console.log(error);
    }
  }
}