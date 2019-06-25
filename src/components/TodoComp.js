import React from 'react';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import VisibilityFilters from './VisibilityFilters.js';
import { connect } from 'react-redux';

function TodoComp(props) {  

	return (
			<div className="todo-comp">
              <h2>{props.listName}</h2>
              <AddTodo list={props.list}/>
              <TodoList list={props.list} />
              <VisibilityFilters />
            </div>
	    );
    }


export default connect()(TodoComp);
