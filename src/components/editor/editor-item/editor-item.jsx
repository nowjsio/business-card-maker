import React from 'react';
import styles from './editor-item.module.css';

const EditorItem = ({ item, onEdit, onUploadImage }) => {
  return (
    <form className={styles.editorView}>
      <input type="text" name="" id="" value={item.name} />
      <input type="text" name="" id="" value={item.company} />
      <select name="" id="" value={item.theme}>
        <option value="Ligth"> Light</option>
        <option value="Dark"> Dark</option>
        <option value="Colorful"> Colorful</option>
      </select>
      <input type="text" name="" id="" value={item.title} />
      <input type="email" name="" id="" value={item.email} />
      <input type="button" onClick={() => onEdit()} value="Edit" />
      <input type="button" onClick={() => onUploadImage()} value="Upload" />
    </form>
  );
};

export default EditorItem;
