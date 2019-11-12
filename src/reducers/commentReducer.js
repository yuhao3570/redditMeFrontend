import changeScore from '../helperFunction/changeScore';

const initState = {
  comments: [],
  updating: false
};

export default function commentReducer(state = initState, action) {
  if(action.type.includes('START') ){
    return {
      ...state,
      updating: true
    }
  }

// get all coments
  if(action.type === 'GET_COMMENTS_SUCCESS'){
    return {
      comments: [...action.comments],
      updating: false
    }
  }
// comment votes
if (action.type.includes('VOTE_COMMENT_SUCCESS')) {
  let tempComments = [...state.comments];
  tempComments = tempComments.map(comment => {
    if (comment.comment_id === action.comment_id) {
      comment = {
        ...comment,
        score: changeScore(comment.score, action.type)
      }
    }
    return comment;
  })

  return {
    ...state,
    updating: false,
    Comments: [...tempComments]
  }
}
  return state;
}