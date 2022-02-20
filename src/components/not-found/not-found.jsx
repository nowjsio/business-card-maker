import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './not-found.module.css';

const NotFound = () => {
  const location = useLocation();
  const pathName = location.pathname;
  return (
    <section className={styles.notFoundSection}>
      <h1 className={styles.title}>Not Found</h1>
      <h2>current location: {pathName}</h2>
    </section>
  );
};

export default NotFound;
