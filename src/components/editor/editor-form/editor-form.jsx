import React from 'react';

const EditorForm = ({ onSubmit, submitFormRef }) => {
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
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
        <option value="Colorful">Colorful</option>
      </select>
      <input type="text" id="title" placeholder="Title" />
      <input type="email" id="email" placeholder="Email" />
      <div>Not Image</div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditorForm;
