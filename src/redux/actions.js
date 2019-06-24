import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = (comp, content) => ({
  type: ADD_TODO,
	payload: {
		comp,
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const removeTodo = id => ({
	type: REMOVE_TODO,
	payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
