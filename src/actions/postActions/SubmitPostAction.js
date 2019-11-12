export default function submitPostAction(post) {
  return async (dispatch) => {
    dispatch({type: 'SUBMIT_POST_START'});
    console.log('submit post', post)

    let result = await fetch('http://localhost:8080/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(post)
    })
    let data = await result.json();

    dispatch({
      type: 'SUBMIT_POST_SUCCESS',
      data,
    })
  }
}