import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <div>
      <h1>TodoList</h1>
      {todos.map((t) => (
        <Todo key={t.id} {...t} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
