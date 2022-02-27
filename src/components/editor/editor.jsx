import React from 'react';
import styles from './editor.module.css';
import EditorItem from './editor-item/editor-item';
import EditorForm from './editor-form/editor-form';

const Editor = ({ datas, onSubmit, onEdit, onUploadImage }) => {
  console.log(datas);
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.editorItemList}>
        {datas &&
          datas.map((item, idx) => {
            const key = Date.now() + idx;
            return (
              <EditorItem
                key={key}
                item={item}
                onEdit={onEdit}
                onUploadImage={onUploadImage}
              />
            );
          })}
      </ul>
      <div className={styles.editorForm}>
        <EditorForm onSubmit={onSubmit} />
      </div>
    </section>
  );
};

export default Editor;
