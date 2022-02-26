import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [datas, setDatas] = useState([
    {
      name: 'nowjsio',
      company: 'etc',
      theme: 'Dark',
      title: 'developer',
      email: 'nowjsio@gmail.com',
    },
    {
      name: 'tester',
      company: 'etc',
      theme: 'Light',
      title: 'developer',
      email: 'Tester@gmail.com',
    },
    {
      name: 'bob',
      company: 'etc',
      theme: 'Colorful',
      title: 'developer',
      email: 'bob@gmail.com',
    },
  ]);
  const submitFormRef = useRef();
  const editFormRef = useRef();
  // const location = useLocation();
  const navigate = useNavigate();
  const parsingFormRef = formRef => {
    const formCurrentValue = formRef?.current;
    if (formCurrentValue) {
      const ret = {};
      // eslint-disable-next-line no-restricted-syntax
      for (const item of formCurrentValue) {
        ret[item.id] = item.value;
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
    const inputData = parsingFormRef(formRef);
    if (inputData) {
      setDatas(preDatas => {
        return [...preDatas, inputData];
      });
    } else {
      alert('check your input Data');
    }
    formRef.current.reset();
  };
  const handleEdit = () => {};
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
          submitFormRef={submitFormRef}
          onEdit={handleEdit}
          editFormRef={editFormRef}
          onUploadImage={handleUploadImage}
        />
        <Preview datas={datas} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
