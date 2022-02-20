import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import Maker from './components/maker/maker';
import NotFound from './components/not-found/not-found';
import AuthService from './service/authService';
import styles from './app.module.css';

const authService = new AuthService();

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route path="maker" exact element={<Maker />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
