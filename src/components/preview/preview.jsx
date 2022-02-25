import React from 'react';
import styles from './preview.module.css';
import PreviewItem from './preview-item/preview-item';

const Preview = ({ data }) => {
  return (
    <section className={styles.preview}>
      {data &&
        data.map((item, idx) => {
          const key = Date.now() + idx;
          return <PreviewItem key={key} item={item} />;
        })}
    </section>
  );
};

export default Preview;
