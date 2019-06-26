import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisAndList } from "../redux/selectors";

function TodoList ({ state, list, visibilityFilter }) {

    const filteredTodos = getTodosByVisAndList(state, list, visibilityFilter);
    return (
        <ul className="todo-list">
          {filteredTodos && filteredTodos.length
              ? filteredTodos.map((todo, index) => {
                  return <Todo key={`todo-${todo.id}`} todo={todo} />;
              }) :
              visibilityFilter === "all" ? "No todos left!" :
              visibilityFilter === "completed" ? "No completed here..!" :
              "No uncompleted tasks!"
          
          }
        </ul>
    );
}



const mapStateToProps = ( state, ownProps ) => {
    const { visibilityFilter } = state; 
    const { list } = ownProps;
   
    return {
        state,
        list: list,
        visibilityFilter: visibilityFilter[list]
        
    };
};    
    export default connect(mapStateToProps)(TodoList);


// export default TodoList;
