import React from 'react';
import styles from './preview-item.module.css';

const PreviewItem = ({ item }) => {
  const { name, company, theme, title, email } = item;
  return (
    <section className={styles.previewItem}>
      <img className={styles.image} src="/images/default_logo.png" alt="logo" />
      <input type="text" name="" id="" value={name} />
      <input type="text" name="" id="" value={company} />
      <input type="text" name="" id="" value={theme} />
      <input type="text" name="" id="" value={title} />
      <input type="email" name="" id="" value={email} />
    </section>
  );
};

export default PreviewItem;
