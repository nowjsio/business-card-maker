import React, { useRef } from 'react';
import styles from './image-file-input.module.css';

const ImageFileInput = props => {
  const { fileName, onFileChange, cloudinary } = props;
  const inputRef = useRef();

  const userFileName = fileName || 'no-Image';
  const buttonBackGround =
    userFileName === 'no-Image'
      ? `${styles.defaultImage}`
      : `${styles.usingImage}`;

  const onButtonClick = event => {
    event.preventDefault();
    console.log(inputRef);
    inputRef.current.click();
  };

  const onChange = async event => {
    event.preventDefault();
    const file = event?.target?.files?.[0];
    if (file) {
      const result = await cloudinary.upload(file);
      onFileChange({
        fileName: result.original_filename,
        fileURL: result.url,
      });
    } else {
      console.log('not found file');
    }
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        // className={`${styles.button} ${styles[imageCss]}`}
        className={styles.input}
        accept="image/*"
        type="file"
        onChange={onChange}
      />
      <button
        className={`${styles.button} ${buttonBackGround}`}
        type="button"
        onClick={onButtonClick}
      >
        {userFileName}
      </button>
    </div>
  );
};

export default ImageFileInput;
