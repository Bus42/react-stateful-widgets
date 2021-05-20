import React from "react";

const TodoItem = (props) => {
  const { title, content, id, markComplete } = props;
  console.table(props)
  const todoId = `${id}`
  return (
    <div id={todoId} className="todo_item">
      <h3>{title}</h3>
      <p>{content}</p>
      <hr/>
      <button onClick={() => markComplete(todoId)}>Mark Complete</button>
    </div>
  );
};

export default TodoItem;
