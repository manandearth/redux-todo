import React from 'react';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import VisibilityFilters from './components/VisibilityFilters.js';
import TodoComp from './components/TodoComp.js';
import AddList from './components/AddList.js';
import { getListById } from './redux/selectors.js';
import './App.css';
import { connect } from 'react-redux';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    handleGetListById(list) {
        return getListById(list);
    }
    
    render() {
        return (
			<div className="todo-app">
			  <h1>Todo List</h1>
              <h2>Extending the redux basic example. </h2>
               <AddList />
              <div>{this.props.listsArray && this.props.listsArray !== 0 ?
                  this.props.listsArray.map(list =>
                      <div>
                        <TodoComp listName={this.props.lists[list]} />
                        {console.log(this.props.lists[list])}
                   </div>
                  ) : this.props.a}</div>
            </div>
	);
    }
}

function mapStateToProps(state) {
    return {
        listsArray: Object.keys(state.todos.lists),
        lists: state.todos.lists,
        a: "Bob"
    };
} 

export default connect(mapStateToProps)(TodoApp);
