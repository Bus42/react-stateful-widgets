import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [Todos, setTodos] = useState([]);

  const markComplete = (id) => {
    console.log(id)
    const newList = [...Todos];
    const newNewList = newList.filter(task => task.id != id)
    console.log(newNewList);
    setTodos(newNewList);
  };
  const addTodo = (title, content, id) => {
    const newItem = { title, content, id };
    const newList = [...Todos];
    newList.push(newItem);
    setTodos(newList);
  };
  return (
    <div id="Todo_wrapper" className="container">
      <TodoForm addTodo={addTodo} />
      {Todos.map((task, index) => (
        <TodoItem
          title={task.title}
          content={task.content}
          id={task.id}
          key={index}
          markComplete={markComplete}
        />
      ))}
    </div>
  );
};

export default Todo;
