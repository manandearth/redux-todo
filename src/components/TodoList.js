import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityFilter = this.handleVisibilityFilter.bind(this);
    }

    handleVisibilityFilter() {
    }
    render() {
        const todos = this.props.todos;
        const visibilityFilter =  this.props.visibiltyFilter;
        return (
            <ul className="todo-list">
              {todos && todos.length
                  ? todos.map((todo, index) => {
                      return <Todo key={`todo-${todo.id}`} todo={todo} />;
                  }) :
                  visibilityFilter === "all" ? "No todos left!" :
                  visibilityFilter === "completed" ? "No completed here..!" :
                  "No uncompleted tasks!"
              
                  }
         </ul>
        );
    }
} 
    
const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return {
        todos: todos,
        visibiltyFilter: state.visibilityFilter};
};    
    export default connect(mapStateToProps)(TodoList);


// export default TodoList;
