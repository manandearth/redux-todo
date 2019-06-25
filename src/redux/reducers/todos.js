import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, ADD_LIST } from "../actionTypes";

const initialState = {
	lists: {1: "Todo"},
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
	  case ADD_LIST: {
		  const { listId, list } = action.payload;
		  const newLists = Object.assign(state.lists, {[listId]: list});
				return {
					...state,
					lists: newLists
				};
	  }
		  
	  
	  
		  default:
      return state;
  }
}
