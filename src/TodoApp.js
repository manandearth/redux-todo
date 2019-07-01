import React from 'react';
import Navbar from './components/navbar';
import AddTodo from './components/AddTodo.js';
import TodoList from './components/TodoList.js';
import VisibilityFilters from './components/VisibilityFilters.js';
import TodoComp from './components/TodoComp.js';
import AddList from './components/AddList.js';
import { getListById } from './redux/selectors.js';
import './App.css';
import { connect } from 'react-redux';
import Draggable from 'react-draggable';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    handleGetListById(list) {
        return getListById(list);
    }
    
    render() {
        return (
            <div>
              <Navbar />
			  <div className="todo-app">
              <div className="app-header">
			    <p>Create multiple lists.<br /> 
                  Click an item to toggle completion.<br />
                  Filter the views: <b>'all/completed/incomplete'</b>.<br />
                  Add a new list using the field below.<br />
                  Click a list title to rename.
                </p>
              </div>
              <AddList />
              <div>{this.props.listsArray && this.props.listsArray !== 0 ?
                  this.props.listsArray.map(list =>
                      <Draggable
                        enableUserSelectHack={false}> {/*passing this prop to allow typing in the textfield child */}
                      <div>
                        <TodoComp
                          listName={this.props.lists[list]}
                          list={list}
                        />
                        {console.log(this.props.lists[list])}
                      </div>
                      </Draggable>
                  ) : this.props.a}</div>
            </div>
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
