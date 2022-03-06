import React from 'react';
import styles from './editor.module.css';
import EditorItem from './editor-item/editor-item';
import EditorForm from './editor-form/editor-form';

const Editor = ({ ImageFileInput, cards, onAdd, onUpdate, onDelete }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Card Maker</h1>
      <ul className={styles.editorItemList}>
        {cards &&
          Object.keys(cards).map(id => {
            return (
              <EditorItem
                key={id}
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
