import { SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";

const initialState = {1: VISIBILITY_FILTERS.ALL};

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
		return Object.assign(state, { [action.payload.list]: action.payload.filter});
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
