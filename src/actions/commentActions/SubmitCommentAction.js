export default function submitCommentAction(post_id, comment) {
  return async (dispatch) => {
    dispatch({type: 'SUBMIT_COMMENT_START'});
    console.log('submit comment to: ', `http://localhost:8080/posts/${post_id}/comments`)
    let fetchResult = await fetch(`http://localhost:8080/posts/${post_id}/comments`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(comment)
    })
    let returnedComment = await fetchResult.json();

    dispatch({
      type: 'SUBMIT_COMMENT_SUCCESS',
      returnedComment,
    })
  }
}