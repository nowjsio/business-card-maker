import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

const Login = ({ authService }) => {
  const authLogin = event => {
    const currentTargetName = event.currentTarget.innerText;
    console.log(currentTargetName);
    authService
      .login(currentTargetName)
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error('TEST', error));
  };
  return (
    <section>
      <Footer />
      <section>
        <h1>Login</h1>
        <ul>
          <li>
            <button type="button" onClick={event => authLogin(event)}>
              Google
            </button>
          </li>
          <li>
            <button type="button" onClick={event => authLogin(event)}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Header />
    </section>
  );
};

export default Login;
