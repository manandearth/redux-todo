import React from 'react';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import VisibilityFilters from './components/VisibilityFilters.js';
import TodoComp from './components/TodoComp.js';
import AddList from './components/AddList.js';
import './App.css';


class TodoApp extends React.Component {
   
    render() {
        return (
			<div className="todo-app">
			  <h1>Todo List</h1>
              <h2>Extending the redux basic example. </h2>
              <AddTodo />
              <TodoList />
              <VisibilityFilters />
              <AddList />
              <TodoComp /> {/*the new element */}
            </div>
	);
    }
}

export default TodoApp;
