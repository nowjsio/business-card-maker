import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ ImageFileInput, authService, cardRepository }) => {
  const userHistory = useLocation().state;
  const [userId, setUserId] = useState(userHistory && userHistory.uid);
  const [cards, setCards] = useState({});
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (!userId) {
      return null;
    }
    const stopSync = cardRepository.syncData(userId, setCards);
    return () => stopSync;
  }, [userId]);

  useEffect(() => {
    console.log(userId);
    authService.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setUserId(user.uid);
      } else {
        goToHome();
      }
    });
  });
  const onLogout = () => {
    authService.logout();
  };

  const handleAdd = newCard => {
    setCards(preCards => {
      const update = { ...preCards };
      update[newCard.id] = newCard;
      return update;
    });
    cardRepository.create(userId, newCard);
  };

  const handleUpdate = newCard => {
    setCards(preCards => {
      const update = { ...preCards };
      update[newCard.id] = newCard;
      return update;
    });
    cardRepository.create(userId, newCard);
  };

  const handleDelete = newCard => {
    setCards(preCards => {
      const update = { ...preCards };
      delete update[newCard.id];
      return update;
    });
    cardRepository.delete(userId, newCard);
  };

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
