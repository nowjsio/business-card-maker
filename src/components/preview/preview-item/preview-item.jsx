import React from 'react';
import styles from './preview-item.module.css';

const PreviewItem = ({ item }) => {
  const DEFAULT_IMAGAE = '/images/default_logo.png';
  const { name, company, theme, title, email, message, fileName, fileURL } =
    item;
  const url = fileURL || DEFAULT_IMAGAE;
  return (
    <li className={`${styles.previewItem} ${styles[theme]}`}>
      <img className={styles.avatar} src={url} alt={`profile ${fileName}`} />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

export default PreviewItem;
