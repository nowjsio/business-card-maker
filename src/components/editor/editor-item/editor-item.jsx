import React, { useRef } from 'react';
import styles from './editor-item.module.css';

const EditorItem = ({ item, onEdit, onUploadImage }) => {
  const { id, name, company, theme, title, email } = item;
  const editFormRef = useRef();
  return (
    <li className={styles.editorItem}>
      <form ref={editFormRef} onSubmit={event => onEdit(event, editFormRef)}>
        <input type="hidden" id="id" value={id} readOnly />
        <input type="text" id="name" defaultValue={name} />
        <input type="text" id="company" defaultValue={company} />
        <select id="theme" defaultValue={theme}>
          <option value="ligth"> Light</option>
          <option value="dark"> Dark</option>
          <option value="colorful"> Colorful</option>
        </select>
        <input type="text" id="title" defaultValue={title} />
        <input type="email" id="email" defaultValue={email} />
        <input type="submit" value="Edit" />
        <input type="button" onClick={() => onUploadImage()} value="Upload" />
      </form>
    </li>
  );
};

export default EditorItem;
