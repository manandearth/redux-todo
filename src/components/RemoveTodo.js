import React from "react";
import { connect } from "react-redux";
import { removeTodo } from "../redux/actions";

class RemoveTodo extends React.Component {
  constructor(props) {
      super(props);
      this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    }

    handleRemoveTodo = () => {
        console.log("triggered");
        this.props.removeTodo(this.props.id); //dispatches actions to remove todo
    };

    render() {
        console.log(this.props);
        return (
            
              <span className="remove-todo" onClick={this.handleRemoveTodo}>
               - - Delete - -
              </span>
            
        );
    }
}

export default connect(
  null,
  { removeTodo }
)(RemoveTodo);
// export default AddTodo;
