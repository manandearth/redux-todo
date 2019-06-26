import { SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";

const initialState = {1: VISIBILITY_FILTERS.ALL};


//FIX -> look into the rules for the returned state (works now)
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
		return {...state,
			...Object.assign(state, { [action.payload.list]: action.payload.filter})};
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
