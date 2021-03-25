import React, { useState } from "react";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addTodo } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = new Date().getMilliseconds();
    function goAhead(){
        addTodo(title, content, id)
        setTitle("")
        setContent("")
    }
    title && content ? goAhead() : window.alert("Please add both Title and Content")
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const handleTextareaChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        onChange={(e) => handleInputChange(e)}
        type="text"
        placeholder={"Todo Title"}
        value={title}
      />
      <textarea
        onChange={(e) => handleTextareaChange(e)}
        name="input_content"
        id="input_content"
        cols="30"
        rows="10"
        placeholder="Todo content"
        value={content}
      ></textarea>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
