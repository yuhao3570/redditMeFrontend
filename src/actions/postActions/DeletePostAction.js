export default function deletePostAction(delete_id) {
  return async (dispatch) => {
    dispatch({type: 'DELETE_POST_START'});
      await fetch(`http://localhost:8080/posts/${delete_id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })

    dispatch({
      type: 'DELETE_POST_SUCCESS',
      delete_id
    })
  }
}