import React from 'react';
import styles from './preview.module.css';
import PreviewItem from './preview-item/preview-item';

const Preview = ({ datas }) => {
  return (
    <ul className={styles.preview}>
      {datas &&
        datas.map((item, idx) => {
          const key = Date.now() + idx;
          return <PreviewItem key={key} item={item} />;
        })}
    </ul>
  );
};

export default Preview;
