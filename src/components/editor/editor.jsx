import React from 'react';
import styles from './editor.module.css';
import EditorItem from './editor-item/editor-item';
import EditorForm from './editor-form/editor-form';

const Editor = ({
  datas,
  onSubmit,
  onEdit,
  onUploadImage,
  submitFormRef,
  editFormRef,
}) => {
  console.log(datas);
  return (
    <section className={styles.editor}>
      {datas && (
        <div className={styles.editorItem}>
          <div className={styles.editorItemWrapper}>
            {datas.map((item, idx) => {
              const key = Date.now() + idx;
              return (
                <EditorItem
                  key={key}
                  item={item}
                  onEdit={onEdit}
                  editFormRef={editFormRef}
                  onUploadImage={onUploadImage}
                />
              );
            })}
          </div>
        </div>
      )}
      <div className={styles.editorForm}>
        <EditorForm onSubmit={onSubmit} submitFormRef={submitFormRef} />
      </div>
    </section>
  );
};

export default Editor;
