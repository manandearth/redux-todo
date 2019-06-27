import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilters from './VisibilityFilters';
import { connect } from 'react-redux';
import { renameList, removeList, removeListFilter } from '../redux/actions.js';

class TodoComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            title: this.props.listName
        };
    }

    handleTitleClick = () =>
        this.setState({editable: !this.state.editable});

    handleEnterKey = (e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            this.props.renameList(this.props.list, this.state.title);
            this.setState({editable: !this.state.editable});
        }
    }

    updateTitle = title => {
        this.setState({ title });
    }

    handleRemoveList = (props) => { 
        // const isSure = window.confirm("remove the list?");
        
        if (window.confirm("are you sure?")) {
            this.props.removeList(this.props.list);
            this.props.removeListFilter(this.props.list);}
        
    }
    
    
    render(props) {  
	    return (
			<div className="todo-comp">
              <div>
                {this.state.editable ?
                    <input
                      onChange={e => this.updateTitle(e.target.value)}
                      onKeyDown={this.handleEnterKey}
                      value={this.state.title}>
                    </input>
                    :
                    <div>
                    <h2>
                      <span onClick={this.handleTitleClick}>{this.props.listName}</span>
                      <span
                        className="remove-list"
                        onClick={this.handleRemoveList}> remove</span></h2>
                    </div>}
              </div>
              <AddTodo list={this.props.list} />
              <TodoList list={this.props.list} />
              <VisibilityFilters list={this.props.list} />
            </div>
	    );
    }
}

export default connect(
    null,
    { renameList, removeList, removeListFilter }
)(TodoComp);
