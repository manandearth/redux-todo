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
import { Responsive, WidthProvider } from 'react-grid-layout';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { rowHeight: 10 };
        this.handleResize = this.handleResize.bind(this);
    }

    handleGetListById(list) {
        return getListById(list);
    }

    handleResize() {
        const newState = {rowHeight: 10};
        this.setState(() => newState);
    }
    
    render() {

        return (
            <div>
              <Navbar />
              <div className="todo-app">
                <ResponsiveGridLayout className="layout"
                                      cols={4} rowHeight={this.state.rowHeight}
                                      breakpoints={{four: 1600, three: 1200, two: 800, one: 400}} 
                                      cols={{four: 4, three: 3, two: 2, one: 1}}
                                      verticalCompact={true}
                                      compactType={'vertical'}
                                      draggableCancel="input,textarea" /* Cancel dragging on the input fields to allow focus and typing  */
                                      /* onResize={this.handleResize} */
                >
                
                  
                  <div className="app-header"
                       key="app-header"
                       data-grid={{x: 0, y: 0, w: 0.97, h: 10,  static: true}}>{/*for `smoother` steps in resizing `h` takes 10 row heights (10 px each)   */}
			        <p>Click an item to toggle completion.<br />
                      Filter the views: <b>'all/completed/incomplete'</b>.<br />
                      Click a list title to rename.
                    </p>
                    <AddList /> 
                  </div>
                  
                  
                  {this.props.listsArray && this.props.listsArray !== 0 ?
                      this.props.listsArray.map(list =>
                          <div className="todo-comp-container"
                            key={"TodoComp" + list}
                                data-grid={{x: 1, y: 2, w: 1, h: 9}}>
                            <TodoComp
                              listName={this.props.lists[list]}
                              list={list}
                            />
                   </div> ) : this.props.a}
              </ResponsiveGridLayout>
              </div>
                  </div>
            
	);
    }
}

function mapStateToProps(state) {
    return {
        listsArray: Object.keys(state.todos.lists),
        lists: state.todos.lists
    };
} 

export default connect(mapStateToProps)(TodoApp);
