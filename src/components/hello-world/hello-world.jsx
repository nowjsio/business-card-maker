import React from 'react';
import styles from './hello-world.module.css';

// eslint-disable-next-line react/prop-types
const HelloWorld = ({ hello }) => {
  return <div className={styles.hello}>{hello}</div>;
};

export default HelloWorld;
