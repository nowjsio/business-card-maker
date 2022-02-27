import React, { useRef } from 'react';

const EditorForm = ({ onSubmit }) => {
  const submitFormRef = useRef();
  return (
    <form
      ref={submitFormRef}
      onSubmit={event => onSubmit(event, submitFormRef)}
    >
      <input type="text" id="name" placeholder="Name" />
      <input type="text" id="company" placeholder="Company" />
      <select name="" id="theme" placeholder="Theme">
        <option value="" disabled selected>
          Select your Theme
        </option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input type="text" id="title" placeholder="Title" />
      <input type="email" id="email" placeholder="Email" />
      <div>Not Image</div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditorForm;
