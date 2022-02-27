import React from 'react';
import styles from './preview.module.css';
import PreviewItem from './preview-item/preview-item';

const Preview = ({ datas }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.previewList}>
        {datas &&
          datas.map((item, idx) => {
            const key = Date.now() + idx;
            return <PreviewItem key={key} item={item} />;
          })}
      </ul>
    </section>
  );
};

export default Preview;
