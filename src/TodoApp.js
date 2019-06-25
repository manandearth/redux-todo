import React from 'react';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import VisibilityFilters from './components/VisibilityFilters.js';
import TodoComp from './components/TodoComp.js';
import AddList from './components/AddList.js';
import './App.css';
import { connect } from 'react-redux';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
			<div className="todo-app">
			  <h1>Todo List</h1>
              <h2>Extending the redux basic example. </h2>
               <AddList />
              <div>{this.props.lists && this.props.lists !== 0 ?
                  this.props.lists.map(list =>
                      <div>
                     <TodoComp />
                   </div>
                  ) : this.props.a}</div>
            </div>
	);
    }
}

function mapStateToProps(state) {
    return {
        lists: Object.keys(state.todos.lists),
        a: "Bob"
    };
}

export default connect(mapStateToProps)(TodoApp);
