import React from 'react';
import styles from './preview.module.css';
import PreviewItem from './preview-item/preview-item';

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.previewList}>
        {cards &&
          Object.keys(cards).map((id, idx) => {
            const key = Date.now() + idx;
            return <PreviewItem key={key} item={cards[id]} />;
          })}
      </ul>
    </section>
  );
};

export default Preview;
