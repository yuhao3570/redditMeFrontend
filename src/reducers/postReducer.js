import changeScore from '../helperFunction/changeScore';

const initState = {
  posts: [],
  updating: false
};

export default function postReducer(state = initState, action) {
  if (action.type.includes('START')) {
    return {
      ...state,
      updating: true
    }
  }

  // get posts
  if (action.type === 'GET_POSTS_SUCCESS') {
    return {
      ...state,
      posts: [...action.posts],
      updating: false
    }
  }

  //add post
  if (action.type === 'SUBMIT_POST_SUCCESS') {
    return {
      ...state,
      posts: [action.data, ...state.posts],
      updating: false
    }
  }

  // delete post
  if (action.type === 'DELETE_POST_SUCCESS') {
    const tempPosts = state.posts.filter(post => post.post_id !== action.delete_id);

    return {
      ...state,
      posts: [...tempPosts],
      updating: false
    }
  }

  // vote on post
  if (action.type.includes('VOTE_POST_SUCCESS')) {
    let tempPosts = [...state.posts];
    tempPosts = tempPosts.map(post => {
      if (post.post_id === action.post_id) {
        post = {
          ...post,
          score: changeScore(post.score, action.type)
        }
      }
      return post;
    })

    return {
      ...state,
      updating: false,
      posts: [...tempPosts]
    }
  }
  return state;
}