function comments(state = [], action) {
	switch(action.type){
		case 'ADD_COMMENT':
			const { author, comment } = action;
			return {
				...state,
				[action.postId]: [
					...state[action.postId],
					{ user: author, text: comment }
				]
			}
		case 'REMOVE_COMMENT':
			const { i, postId } = action;
			return {
				...state,
				[action.postId]: [
					...state[postId].slice(0, i),
					...state[postId].slice(i+1)
				]
			}
		default: 
			return state;
	}
}

export default comments;



// function postComments(state = [], action) {
//   switch(action.type){
//     case 'ADD_COMMENT':
//       // return the new state with the new comment
//       return [...state,{
//         user: action.author,
//         text: action.comment
//       }];
//     case 'REMOVE_COMMENT':
//       // we need to return the new state without the deleted comment
//       return [
//         // from the start to the one we want to delete
//         ...state.slice(0,action.i),
//         // after the deleted one, to the end
//         ...state.slice(action.i + 1)
//       ]
//     default:
//       return state;
//   }
//   return state;
// }

// function comments(state = [], action) {
//   if(typeof action.postId !== 'undefined') {
//     return {
//       // take the current state
//       ...state,
//       // overwrite this post with a new one
//       [action.postId]: postComments(state[action.postId], action)
//     }
//   }
//   return state;
// }

// export default comments;
