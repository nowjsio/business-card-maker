import React from 'react';
import styles from './editor.module.css';
import EditorItem from './editor-item/editor-item';
import EditorForm from './editor-form/editor-form';

const Editor = ({ data }) => {
  console.log(data);
  return (
    <section className={styles.editor}>
      {data && (
        <div className={styles.editorItem}>
          <div className={styles.editorItemWrapper}>
            {data.map((item, idx) => {
              const key = Date.now() + idx;
              return <EditorItem key={key} item={item} />;
            })}
          </div>
        </div>
      )}
      <div className={styles.editorForm}>
        <EditorForm data={data} />
      </div>
    </section>
  );
};

export default Editor;
