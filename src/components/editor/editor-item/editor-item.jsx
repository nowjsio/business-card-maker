import React from 'react';
import styles from './editor-item.module.css';

const EditorItem = ({ item }) => {
  return (
    <form className={styles.editorView}>
      <input type="text" name="" id="" value={item.Name} />
      <input type="text" name="" id="" value={item.Company} />
      <select name="" id="" value={item.Light}>
        <option value="Ligth"> Light</option>
        <option value="Dark"> Dark</option>
        <option value="Colorful"> Colorful</option>
      </select>
      <input type="text" name="" id="" value={item.Title} />
      <input type="email" name="" id="" value={item.Email} />
      <input type="button" value="Edit" />
      <input type="button" value="Upload" />
    </form>
  );
};

export default EditorItem;
