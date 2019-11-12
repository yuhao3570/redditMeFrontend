export default function getAllCommentsAction(post_id) {
  return async (dispatch) => {
    dispatch({type: 'GET_COMMENTS_START'});
    console.log('url: ', `http://localhost:8080/posts/${post_id}/comments`)
    let fetchResult = await fetch(`http://localhost:8080/posts/${post_id}/comments`, {
      headers: {'Content-Type': 'application/json'}
    })
    let comments = await fetchResult.json();
    comments.reverse();

    dispatch({
      type: 'GET_COMMENTS_SUCCESS',
      comments,
    })
  }
}