import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const authLogin = event => {
    const currentTargetName = event.currentTarget.innerText;
    authService
      .login(currentTargetName)
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error('TEST', error));
  };
  const providerList = ['Google', 'Github'];
  return (
    <div className={styles.wholeSection}>
      <Header />
      <section className={styles.loginSection}>
        <h1 className={styles.title}>Login</h1>
        <ul className={styles.list}>
          {providerList.map(item => (
            <li key={item} className={styles.item}>
              <button
                className={styles.button}
                type="button"
                onClick={event => authLogin(event)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
