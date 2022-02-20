import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };
  const goToHome = () => {
    navigate('/');
  };
  const {
    state: { uid },
  } = location;
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (!user) {
        goToHome();
      }
      //   return !!user && goToHome();
    });
  });
  console.log(`uid: ${uid}`);
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor />
        <Preview />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
