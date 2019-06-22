import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

//the default reducer from todos initiates:
// const initialState = {
//   allIds: [],
//   byIds: {}
// };
//
// and controls the ADD_TODO and TOGGLE_TODO state.
export default combineReducers({ todos, visibilityFilter });


