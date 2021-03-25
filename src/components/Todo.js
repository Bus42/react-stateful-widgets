// It may look a little different than some solutions because I did not use a tutorial. 
// Instead, I thought of how I would approach the solution from the ground up with existing React knowledge.
// I wanted to show *my* solution to a problem.
// I would not normally just throw all the files in the same folder, but this was a simple exercise.

import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [Todos, setTodos] = useState([]);

  // use id to sort tasks and remove the target task
  const markComplete = (id) => {
    const newList = [...Todos];
    const newNewList = newList.filter(task => task.id != id)
    console.log(newNewList);
    setTodos(newNewList);
  };
  // creates a new task with title, content, and id supplied by TodoForm component
  const addTodo = (title, content, id) => {
    const newItem = { title, content, id };
    // creates identical array instead of acting on state object
    const newList = [...Todos];
    // add new task to list
    newList.push(newItem);
    // update state
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
