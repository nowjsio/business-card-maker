/* eslint-disable no-unused-vars */
import React from 'react';
import Button from './button/button';
import styles from './editor-item.module.css';

const EditorItem = ({ ImageFileInput, card, onUpdate, onDelete }) => {
  const { name, company, theme, title, email, message, fileName } = card;

  const onFileChange = inputFile => {
    onUpdate({
      ...card,
      ...inputFile,
    });
  };

  const onDeleteSubmit = event => {
    event.preventDefault();
    onDelete(card);
  };

  const onChange = event => {
    console.log(event);
    event.preventDefault();
    onUpdate({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        onChange={onChange}
        value={company}
      />
      <select
        className={styles.select}
        name="theme"
        onChange={onChange}
        value={theme}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        onChange={onChange}
        value={title}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        onChange={onChange}
        value={email}
      />
      <textarea
        className={styles.textarea}
        name="message"
        onChange={onChange}
        value={message}
      />
      <div className={styles.fileInput}>
        <ImageFileInput fileName={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onDeleteSubmit} />
    </form>
  );
};

export default EditorItem;
