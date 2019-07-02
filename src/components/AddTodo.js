import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {

	constructor(props) {
		super(props);
		this.state = { input: "" };
    }
    
  updateInput = input => {
    this.setState({ input });
  };

    handleAddTodo = () => {
        this.props.addTodo(this.props.list, this.state.input); //dispatches actions to add todo
    this.setState({ input: "" }); // sets state back to empty string
    };

    handleEnterKey = (e) => {
        const keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            this.props.addTodo(this.props.list, this.state.input);
            this.setState({ input: "" });
        }}

  render() {
    return (
      <div>
        <input
          key="add-todo-input"
          onChange={e => this.updateInput(e.target.value)}
          onKeyDown={this.handleEnterKey}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
// export default AddTodo;
