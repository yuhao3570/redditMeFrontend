const initState = {
  posts: [],
  updating: false
};

export default function postReducer(state = initState, action) {
  if(action.type === 'GET_POSTS_START'){
    return {
      ...state,
      updating: true
    }
  }

  if(action.type === 'GET_POSTS_SUCCESS'){
    const newState = {
      ...state,
      posts: [...action.posts],
      updating: false
    }
    console.log('newState', newState)

    return {
      ...state,
      ...newState
    }
  }
  return state;
}