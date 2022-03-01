import React, { useRef } from 'react';
import Button from '../editor-item/button/button';
import ImageFileInput from '../editor-item/image-file-input/image-file-input';
import styles from './editor-form.module.css';

const EditorForm = ({ onSubmit, onUploadImage }) => {
  const submitFormRef = useRef();
  const tempFileName = null;
  const tempFileUrl = null;
  return (
    <form ref={submitFormRef} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        id="name"
        placeholder="Name"
      />
      <input
        className={styles.input}
        type="text"
        id="company"
        placeholder="Company"
      />
      <select className={styles.select} id="theme">
        <option value="" disabled selected>
          Select your Theme
        </option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="colorful">Colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        id="title"
        placeholder="Title"
      />
      <input
        className={styles.input}
        type="text"
        id="email"
        placeholder="Email"
      />
      <textarea
        className={styles.textarea}
        id="message"
        placeholder="Message"
      />
      <div className={styles.fileInput}>
        <ImageFileInput
          fileName={tempFileName}
          fileUrl={tempFileUrl}
          onClick={onUploadImage}
        />
      </div>
      <Button id="submit" onClick={onSubmit} formRef={submitFormRef} />
    </form>
  );
};

export default EditorForm;
