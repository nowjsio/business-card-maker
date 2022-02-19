import React from 'react';
import Login from './components/login/login';
import AuthService from './service/authService';

const authService = new AuthService();

function App() {
  return <Login authService={authService} />;
}

export default App;
