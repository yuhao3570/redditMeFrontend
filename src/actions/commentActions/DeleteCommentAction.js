export default function deleteCommentAction(delete_id) {
  return async (dispatch) => {
    dispatch({type: 'DELETE_COMMENT_START'});
      await fetch(`http://localhost:8080/posts/${delete_id}/comment`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
    })

    dispatch({
      type: 'DELETE_COMMENT_SUCCESS',
      delete_id
    })
  }
}