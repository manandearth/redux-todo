import React from 'react';
import { connect } from 'react-redux';
import { addList } from '../redux/actions.js';

class AddList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {input: ""};
    }

    updateInput = input => {
        this.setState({ input });
    }
    
    handleAddList = () => {
        this.props.addList(this.state.input);
        this.setState({ input: "" });
        
    }

        handleEnterKey = (e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            this.props.addList(this.state.input);
            this.setState({ input: "" });
        }}

    
	render() {
		return (
			<div>
              <input
                onChange={e => this.updateInput(e.target.value)}
                onKeyDown={this.handleEnterKey}
                value={this.state.input}>
              </input>
              <button className='add-list' onClick={this.handleAddList}>
                Add a new Todo list
              </button>
            </div>
		);
	}
}

export default connect(
    null,
    { addList }
)(AddList);
