import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisAndList } from "../redux/selectors";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityFilter = this.handleVisibilityFilter.bind(this);
        const list = 1;
    }

    handleVisibilityFilter() {
    }
    render() {
        const todos = this.props.todos;
        const visibilityFilter =  this.props.visibiltyFilter;
        const list = this.props.list; //TODO -> create this prop
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
    const { visibilityFilter, list=1 } = state; {/* waiting for dynamic list assignment */}
    const todos = getTodosByVisAndList(state, list, visibilityFilter);
    return {
        todos: todos,
        list: list,
        visibiltyFilter: state.visibilityFilter};
};    
    export default connect(mapStateToProps)(TodoList);


// export default TodoList;
