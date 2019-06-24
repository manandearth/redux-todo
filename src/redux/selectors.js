import { VISIBILITY_FILTERS } from "../constants";

export const getTodosState = store => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};

export const getTodosByComp = (store, comp) => {
	const allTodos = getTodos(store);
	return allTodos.filter(todo => (todo.comp === comp));
};

export const getTodosByVisAndComp = (store, comp, visibilityFilter) => {
	const Todos = getTodosByComp(store, comp);
	switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return Todos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETE:
      return Todos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return Todos;
	}
};
