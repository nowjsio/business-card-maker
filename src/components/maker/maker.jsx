import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ ImageFileInput, authService }) => {
  const [cards, setCards] = useState({
    0: {
      id: '0',
      name: 'nowjsio',
      company: 'etc',
      theme: 'dark',
      title: 'developer',
      email: 'nowjsio@gmail.com',
      message: 'Just Do It',
      fileName: null,
      fileURL: null,
    },
    1: {
      id: '1',
      name: 'tester',
      company: 'etc',
      theme: 'light',
      title: 'developer',
      email: 'Tester@gmail.com',
      message: 'Hello',
      fileName: null,
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'bob',
      company: 'etc',
      theme: 'colorful',
      title: 'developer',
      email: 'bob@gmail.com',
      message: 'Hello',
      fileName: null,
      fileURL: null,
    },
  });

  const navigate = useNavigate();

  const onLogout = () => {
    authService.logout();
  };

  const goToHome = () => {
    navigate('/');
  };

  const handleAdd = newCard => {
    setCards(preCards => {
      const update = { ...preCards };
      update[newCard.id] = newCard;
      return update;
    });
  };

  const handleUpdate = newCard => {
    setCards(preCards => {
      const update = { ...preCards };
      update[newCard.id] = newCard;
      return update;
    });
  };

  const handleDelete = newCard => {
    setCards(preCards => {
      const update = { ...preCards };
      delete update[newCard.id];
      return update;
    });
  };

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (!user) {
        goToHome();
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          ImageFileInput={ImageFileInput}
          cards={cards}
          onAdd={handleAdd}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
