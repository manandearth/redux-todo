import { SET_FILTER, REMOVE_LIST_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";

const initialState = {1: VISIBILITY_FILTERS.ALL};


//FIX -> look into the rules for the returned state (works now)
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
      case SET_FILTER: {
		  return {...state,
			  ...Object.assign(state, { [action.payload.list]: action.payload.filter})};
      }
	  case REMOVE_LIST_FILTER: {
		  const { list } = action.payload;
		  const newState = Object.assign({}, state);
		  delete newState[list];
		  return newState;
	  }
	  default: {
		  return state;
    }
  }
};


export default visibilityFilter;
