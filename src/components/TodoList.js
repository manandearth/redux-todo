import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisAndComp } from "../redux/selectors";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleVisibilityFilter = this.handleVisibilityFilter.bind(this);
        const comp = 1;
    }

    handleVisibilityFilter() {
    }
    render() {
        const todos = this.props.todos;
        const visibilityFilter =  this.props.visibiltyFilter;
        // const comp = this.props.comp;
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
    const { visibilityFilter, comp=1 } = state; {/* waiting for dynamic comp assignment */}
    const todos = getTodosByVisAndComp(state, comp, visibilityFilter);
    return {
        todos: todos,
        comp: comp,
        visibiltyFilter: state.visibilityFilter};
};    
    export default connect(mapStateToProps)(TodoList);


// export default TodoList;
