import React from 'react';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import VisibilityFilters from './VisibilityFilters.js';
import { connect } from 'react-redux';

function TodoComp() {  

	return (
			<div className="todo-comp">
              <h2>waiting to become dynamic..</h2>
              <AddTodo />
              <TodoList />
              <VisibilityFilters />
            </div>
	    );
    }


export default connect()(TodoComp);
