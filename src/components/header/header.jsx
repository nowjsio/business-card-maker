import React from 'react';
import styles from './header.module.css';

// eslint-disable-next-line no-unused-vars
const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {true && (
        <button className={styles.logoutButton} type="button">
          Logout
        </button>
      )}
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
};

export default Header;
