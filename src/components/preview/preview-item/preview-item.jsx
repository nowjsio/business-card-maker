import React from 'react';
import styles from './preview-item.module.css';

const PreviewItem = ({ item }) => {
  const { name, company, theme, title, email } = item;
  return (
    <li className={`${styles.previewItem} ${styles[theme]}`}>
      <img className={styles.image} src="/images/default_logo.png" alt="logo" />
      <input type="text" id="name" value={name} />
      <input type="text" id="company" value={company} />
      <input type="text" id="theme" value={theme} />
      <input type="text" id="title" value={title} />
      <input type="email" id="email" value={email} />
    </li>
  );
};

export default PreviewItem;
