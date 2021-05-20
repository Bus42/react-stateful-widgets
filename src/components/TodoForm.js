import React, { useState } from "react";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addTodo } = props;
  const handleSubmit = (e) => {
    // prevent page reload
    e.preventDefault();
    // enclose actual handler
    function goAhead() {
      // create unique(ish) ID (would not work at larger scale, but fine for this)
      const id = new Date().getMilliseconds();
      addTodo(title, content, id);
      setTitle("");
      setContent("");
    }
    // check for both title and content before adding task
    // further validation can be added ie: min or max length, special characters, etc.
    title && content // do they exist?
      ? goAhead() // if so, do this
      : window.alert("Please add both Title and Content");// if not, do this
  };
  const handleInputChange = (e) => {
    e.preventDefault();
    // use value instead of trying to acces DOM with textContent or other methods
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
        // value prop added to revert to placeholder text display on submission
        value={title}
      />
      <textarea
        onChange={(e) => handleTextareaChange(e)}
        name="input_content"
        id="input_content"
        cols="30"
        rows="10"
        placeholder="Todo content"
        // value prop added to revert to placeholder text display on submission
        value={content}
      ></textarea>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
