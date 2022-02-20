import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = uid => {
    navigate('/maker', {
      state: { uid },
    });
  };
  const authLogin = event => {
    const currentTargetName = event.currentTarget.innerText;
    authService
      .login(currentTargetName)
      .then(data => goToMaker(data.user.uid))
      .catch(error => console.error('TEST', error));
  };
  const providerList = ['Google', 'Github'];

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      return user && goToMaker(user.uid);
    });
  });

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
