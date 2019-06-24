import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
}; 

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
		const { id, comp, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
			[id]: {
				comp,
				content,
				completed: false
          }
        }
      };
    }
      case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
	  case REMOVE_TODO: {
		  const  { id }  = action.payload;
		  const newByIds = Object.assign({}, state.byIds);
		  const newAllIds = (state.allIds.filter(idx => idx !== id));
		  delete newByIds[id];
		  return { 
	  		  ...state,
			  allIds: newAllIds,
			  byIds: newByIds};
	  		 
		  
			  }
		  
	  
	  
		  default:
      return state;
  }
}
