export default function getAllPostsAction() {
  return async (dispatch) => {
    dispatch({type: 'GET_POSTS_START'});

    let fetchResult = await fetch('http://localhost:8080/posts', {
      headers: {'Content-Type': 'application/json'}
    })
    let posts = await fetchResult.json();

    console.log("all posts", posts);

    dispatch({
      type: 'GET_POSTS_SUCCESS',
      posts,
    })
  }
}