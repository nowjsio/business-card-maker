import React from 'react';
import styles from './preview-item.module.css';

const PreviewItem = ({ item }) => {
  return (
    <section className={styles.previewItem}>
      <img className={styles.image} src="/images/default_logo.png" alt="logo" />
      <input type="text" name="" id="" value={item.Name} />
      <input type="text" name="" id="" value={item.Company} />
      <input type="text" name="" id="" value={item.Light} />
      <input type="text" name="" id="" value={item.Title} />
      <input type="email" name="" id="" value={item.Email} />
    </section>
  );
};

export default PreviewItem;
