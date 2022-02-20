import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const authLogin = event => {
    const currentTargetName = event.currentTarget.innerText;
    console.log(currentTargetName);
    authService
      .login(currentTargetName)
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error('TEST', error));
  };
  return (
    <section>
      <Header />
      <section className={styles.loginSection}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button
              className={styles.button}
              type="button"
              onClick={event => authLogin(event)}
            >
              Google
            </button>
          </li>
          <li>
            <button
              className={styles.button}
              type="button"
              onClick={event => authLogin(event)}
            >
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
