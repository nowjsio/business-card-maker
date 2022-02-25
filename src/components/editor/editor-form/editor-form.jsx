import React from 'react';

const EditorForm = () => {
  return (
    <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Company" />
      <input type="text" placeholder="Light" />
      <input type="text" placeholder="Title" />
      <input type="email" placeholder="Email" />
      <div>Not Image</div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditorForm;
