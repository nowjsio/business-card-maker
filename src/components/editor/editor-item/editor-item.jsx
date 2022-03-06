import React, { useRef, useState } from 'react';
import Button from './button/button';
import styles from './editor-item.module.css';

const EditorItem = ({ ImageFileInput, card, onUpdate, onDelete }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const { id, name, company, theme, title, email, message, fileName, fileURL } =
    card;
  const [file, setFile] = useState({ fileName, fileURL });

  const onFileChange = inputFile => {
    setFile(inputFile);
  };
  const onUpdateSubmit = event => {
    event.preventDefault();
    const newCard = {
      id,
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      fileName: file.fileName,
      fileURL: file.fileURL,
    };
    onUpdate(newCard);
    formRef.current.reset();
  };

  const onDeleteSubmit = event => {
    event.preventDefault();
    onDelete(card);
  };
  return (
    <li>
      <form ref={formRef} className={styles.form}>
        <input
          ref={nameRef}
          className={styles.input}
          type="text"
          name="name"
          defaultValue={name}
        />
        <input
          ref={companyRef}
          className={styles.input}
          type="text"
          name="company"
          defaultValue={company}
        />
        <select
          ref={themeRef}
          className={styles.select}
          name="theme"
          defaultValue={theme}
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input
          ref={titleRef}
          className={styles.input}
          type="text"
          name="title"
          defaultValue={title}
        />
        <input
          ref={emailRef}
          className={styles.input}
          type="text"
          name="email"
          defaultValue={email}
        />
        <textarea
          ref={messageRef}
          className={styles.textarea}
          name="message"
          defaultValue={message}
        />
        <div className={styles.fileInput}>
          <ImageFileInput
            fileName={file.fileName}
            onFileChange={onFileChange}
          />
        </div>
        <Button name="Edit" onClick={onUpdateSubmit} />
        <Button name="Delete" onClick={onDeleteSubmit} />
      </form>
    </li>
  );
};

export default EditorItem;
