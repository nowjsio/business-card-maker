import React, { useRef } from 'react';
import Button from './button/button';
import ImageFileInput from './image-file-input/image-file-input';
import styles from './editor-item.module.css';

const EditorItem = ({ item, onEdit, onDelete, onUploadImage }) => {
  const { id, name, company, theme, title, email, message, fileName, fileUrl } =
    item;
  const editFormRef = useRef();
  return (
    <li>
      <form ref={editFormRef} className={styles.form}>
        <input type="hidden" id="id" value={id} readOnly />
        <input
          className={styles.input}
          type="text"
          id="name"
          defaultValue={name}
        />
        <input
          className={styles.input}
          type="text"
          id="company"
          defaultValue={company}
        />
        <select className={styles.select} id="theme" defaultValue={theme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input
          className={styles.input}
          type="text"
          id="title"
          defaultValue={title}
        />
        <input
          className={styles.input}
          type="text"
          id="email"
          defaultValue={email}
        />
        <textarea
          className={styles.textarea}
          id="message"
          defaultValue={message}
        />
        <div className={styles.fileInput}>
          <ImageFileInput
            fileName={fileName}
            fileUrl={fileUrl}
            onClick={onUploadImage}
          />
        </div>
        <Button id="Edit" onClick={onEdit} formRef={editFormRef} />
        <Button id="Delete" onClick={onDelete} formRef={editFormRef} />
      </form>
    </li>
  );

  // return (
  //   <li className={styles.editorItem}>
  //     <form ref={editFormRef} onSubmit={event => onEdit(event, editFormRef)}>
  //       <input type="hidden" id="id" value={id} readOnly />
  //       <input type="text" id="name" defaultValue={name} />
  //       <input type="text" id="company" defaultValue={company} />
  //       <select id="theme" defaultValue={theme}>
  //         <option value="ligth"> Light</option>
  //         <option value="dark"> Dark</option>
  //         <option value="colorful"> Colorful</option>
  //       </select>
  //       <input type="text" id="title" defaultValue={title} />
  //       <input type="email" id="email" defaultValue={email} />
  //       <input type="submit" value="Edit" />
  //       <input type="button" onClick={() => onUploadImage()} value="Upload" />
  //     </form>
  //   </li>
  // );
};

export default EditorItem;
