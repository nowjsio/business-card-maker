import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [datas, setDatas] = useState([
    {
      id: 0,
      name: 'nowjsio',
      company: 'etc',
      theme: 'dark',
      title: 'developer',
      email: 'nowjsio@gmail.com',
    },
    {
      id: 1,
      name: 'tester',
      company: 'etc',
      theme: 'light',
      title: 'developer',
      email: 'Tester@gmail.com',
    },
    {
      id: 2,
      name: 'bob',
      company: 'etc',
      theme: 'colorful',
      title: 'developer',
      email: 'bob@gmail.com',
    },
  ]);
  // const location = useLocation();
  const navigate = useNavigate();
  const parsingFormRef = (formRef, isNew = false) => {
    const formCurrentValue = formRef?.current;
    if (formCurrentValue) {
      const ret = {};
      if (isNew) {
        ret.id = Date.now();
      }
      // eslint-disable-next-line no-restricted-syntax
      for (const item of formCurrentValue) {
        if (item.id) {
          ret[item.id] = item.value;
        }
      }
      return ret;
    }
    return null;
  };
  const onLogout = () => {
    authService.logout();
  };
  const goToHome = () => {
    navigate('/');
  };
  // const {
  //   state: { uid },
  // } = location;
  const handleSubmit = (event, formRef) => {
    event.preventDefault();
    const isNew = true;
    const inputData = parsingFormRef(formRef, isNew);
    if (inputData) {
      setDatas(preDatas => {
        return [...preDatas, inputData];
      });
    } else {
      alert('check your input Data');
    }
    formRef.current.reset();
  };
  const handleEdit = (event, formRef) => {
    event.preventDefault();
    const inputData = parsingFormRef(formRef);
    if (inputData) {
      setDatas(preDatas => {
        return preDatas.map(item => {
          if (parseInt(item.id, 10) === parseInt(inputData.id, 10)) {
            console.log('found same data ID: ', item.id);
            return inputData;
          }
          return item;
        });
      });
    } else {
      alert('check your input Data');
    }
    formRef.current.reset();
  };
  const handleUploadImage = () => {};
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (!user) {
        goToHome();
      }
      //   return !!user && goToHome();
    });
  });
  // console.log(`uid: ${uid}`);

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          datas={datas}
          onSubmit={handleSubmit}
          onEdit={handleEdit}
          onUploadImage={handleUploadImage}
        />
        <Preview datas={datas} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
