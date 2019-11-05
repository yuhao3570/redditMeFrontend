const initState = {
  comments: [],
  updating: false
};

export default function commentsReducer(state = initState, action) {
  if(action.type === 'GET_POSTS_START'){
    return {
      ...state,
      updating: true
    }
  }

  if(action === 'GET_POST_SUCCESS'){
    return {
      posts: [...action.posts],
      updating: false
    }
  }
  return state;
}