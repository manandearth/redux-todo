import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilters from './VisibilityFilters';
import { connect } from 'react-redux';

function TodoComp(props) {  

	return (
			<div className="todo-comp">
              <h2>{props.listName}</h2>
              <AddTodo list={props.list} />
              <TodoList list={props.list} />
              <VisibilityFilters list={props.list} />
            </div>
	    );
    }


export default connect()(TodoComp);
