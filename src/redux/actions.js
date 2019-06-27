import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, SET_FILTER, ADD_LIST, RENAME_LIST } from "./actionTypes";

let nextTodoId = 0;
let nextListId = 1;
export const addTodo = ( list, content ) => ({
  type: ADD_TODO,
	payload: {
		list,
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

export const setFilter = ( list, filter ) => ({
	type: SET_FILTER,
	payload: {
		list: list,
		filter: filter }
});


export const addList = list => ({
	type: ADD_LIST,
	payload: {
		list,
		listId: ++nextListId }
});

export const renameList = ( listId, newTitle ) => ({
	type: RENAME_LIST,
	payload: {
		id: listId,
		title: newTitle }
});
