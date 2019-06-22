import React from 'react';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import VisibilityFilters from './components/VisibilityFilters.js';
import './App.css';

export default function TodoApp () {
	return (
			<div className="todo-app">
			  <h1>Todo List</h1>
              <h2>Extending the redux basic example. </h2>
              <AddTodo />
              <TodoList />
              <VisibilityFilters />
            </div>
	)}
