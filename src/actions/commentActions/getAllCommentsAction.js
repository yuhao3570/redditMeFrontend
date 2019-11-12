export default function getAllCommentsAction (post_id) {
  return async (dispatch) => {
    dispatch({type: 'GET_COMMENTS_START'});
    let fetchResult = await fetch(`http://localhost:8080/posts/${post_id}/comments`, {
      headers: {'Content-Type': 'application/json'}
    })
    let posts = await fetchResult.json();
    posts.reverse();
    dispatch({
      type: 'GET_COMMENTS_SUCCESS',
      posts,
    })
  }
}