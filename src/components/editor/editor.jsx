import React from 'react';
import styles from './editor.module.css';
import EditorItem from './editor-item/editor-item';
import EditorForm from './editor-form/editor-form';

const Editor = ({ ImageFileInput, cards, onAdd, onUpdate, onDelete }) => {
  console.log(cards);
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.editorItemList}>
        {cards &&
          Object.keys(cards).map((id, idx) => {
            const key = Date.now() + idx;
            return (
              <EditorItem
                key={key}
                ImageFileInput={ImageFileInput}
                card={cards[id]}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            );
          })}
      </ul>
      <div className={styles.editorForm}>
        <EditorForm ImageFileInput={ImageFileInput} onAdd={onAdd} />
      </div>
    </section>
  );
};

export default Editor;
