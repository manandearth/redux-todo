import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, ADD_LIST, RENAME_LIST, REMOVE_LIST } from "../actionTypes";

const initialState = {
	lists: {1: "Todo"},
  allIds: [],
  byIds: {}
}; 

export default function(state = initialState, action) {
	switch (action.type) {
      case ADD_TODO: {
		const { id, list, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
			[id]: {
				list,
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
		  const newLists = Object.assign(state.lists, { [listId]: list} );
				return {
					...state,
					lists: newLists
				};
	  }
		  
		case RENAME_LIST: {
			const { id, title } = action.payload;
			const newLists = Object.assign(state.lists, { [id]: title });
			return {
				...state,
				lists: newLists
			};
		}
			//TODO -> in the following case I need to also do the following:
			// 1. remove the id from allIds
			// 2. add an alert for confirmation of deletion.
		case REMOVE_LIST: {
			const { list } = action.payload;
			const newByIds = Object.assign({}, state.byIds); //just duplicating the object in order not to mutate it with delete.
			Object.keys(newByIds).forEach(key => newByIds[key].list === list ? delete newByIds[key] : null);
			const newLists = Object.assign({}, state.lists);
			delete newLists[list];
			return {
				
				lists: newLists,
				byIds: newByIds,
				allIds: state.allIds //TODO: get the id in order to remove the todos' id's from this property 
			};
		}
		default:
      return state;
  }
}
