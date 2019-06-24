import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import RemoveTodo from "./RemoveTodo.js";
import { toggleTodo, removeTodo } from "../redux/actions";




const Todo = (({ todo, toggleTodo }) => (
    <li className="todo-item" >
      {todo && todo.completed ? "· " : "+ "}
      <span
        className={cx("todo-item__text",
            todo && todo.completed && "todo-item__text--completed"
        )} onClick={() => toggleTodo(todo.id)}
      >
        {todo.content}
      </span>
      <RemoveTodo id={todo.id}/>
    </li>
));

// export default Todo;
export default connect(
    null ,
    { toggleTodo }
)(Todo);
