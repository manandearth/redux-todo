import React from 'react';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import VisibilityFilters from './VisibilityFilters.js';


export default function TodoComp () {
		return (
			<div className="todo-comp">
              <h2>Here comes title </h2>
              <AddTodo />
              <TodoList />
              <VisibilityFilters />
            </div>
	);}
