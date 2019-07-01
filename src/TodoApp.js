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
import GridLayout from 'react-grid-layout';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

// const ResponsiveReactGridLayout = WidthProvider(Responsive);

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
    }

    handleGetListById(list) {
        return getListById(list);
    }
    
    render() {

var layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
    {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
    {i: 'c', x: 4, y: 0, w: 1, h: 2}];
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
                <GridLayout className="layout" layout={layout} cols={3} width={1200}>{this.props.listsArray && this.props.listsArray !== 0 ?
                    this.props.listsArray.map(list =>
                   <div key={"TodoComp" + list}>       
                            <TodoComp
                              
                              listName={this.props.lists[list]}
                              list={list}
                            />
                            {console.log(this.props.lists[list])}
                          </div>
                    ) : this.props.a}
              </GridLayout>
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
