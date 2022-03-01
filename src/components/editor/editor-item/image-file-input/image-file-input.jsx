import React from 'react';
import styles from './image-file-input.module.css';

const ImageFileInput = ({ fileName, fileUrl }) => {
  const userFileName = fileName || 'no-Image';
  const imageCss = userFileName === 'no-Image' ? 'defaultImage' : 'validImage';
  console.log(fileUrl);
  return (
    <button className={`${styles.button} ${styles[imageCss]}`} type="button">
      {userFileName}
    </button>
  );
};

export default ImageFileInput;
