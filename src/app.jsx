import React from 'react';
import Login from './components/login/login';
import AuthService from './service/authService';
import styles from './app.module.css';

const authService = new AuthService();

function App() {
  return (
    <div className={styles.app}>
      <Login authService={authService} />
    </div>
  );
}

export default App;
