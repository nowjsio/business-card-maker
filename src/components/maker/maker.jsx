import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [datas, setDatas] = useState({
    0: {
      id: '0',
      name: 'nowjsio',
      company: 'etc',
      theme: 'dark',
      title: 'developer',
      email: 'nowjsio@gmail.com',
      message: 'Just Do It',
      fileName: 'nowjsio',
      fileUrl: null,
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
      fileUrl: null,
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
      fileUrl: null,
    },
  });
  // const location = useLocation();
  const navigate = useNavigate();
  const parsingFormRef = (formRef, isNew = false) => {
    const formCurrentValue = formRef?.current;
    const parsedForm = {};
    if (formCurrentValue) {
      // eslint-disable-next-line no-restricted-syntax
      for (const item of formCurrentValue) {
        if (item.id) {
          parsedForm[item.id] = item.value;
        }
      }
      if (isNew) {
        const newId = String(Date.now());
        const ret = {
          [newId]: { id: newId, ...parsedForm },
        };
        return ret;
      }
      const ret = {
        [parsedForm.id]: { ...parsedForm },
      };
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
        return { ...preDatas, ...inputData };
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
        return { ...preDatas, inputData };
      });
    } else {
      alert('check your input Data');
    }
    formRef.current.reset();
  };
  const handleDelete = (event, formRef) => {
    event.preventDefault();
    const inputFormId = formRef?.current?.id?.value;
    if (inputFormId) {
      setDatas(preDatas => {
        const newDatas = { ...preDatas };
        delete newDatas[inputFormId];
        return newDatas;
      });
      formRef.current.reset();
    } else {
      alert('check your input Data');
    }
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
          onDelete={handleDelete}
          onUploadImage={handleUploadImage}
        />
        <Preview datas={datas} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
