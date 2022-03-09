/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import AuthService from './service/auth-service';
import Cloudinay from './service/cloudinary';
import ImageFileInput from './components/editor/editor-item/image-file-input/image-file-input';

const authService = new AuthService();
const cloudinary = new Cloudinay();

const imageFileInput = props => (
  <ImageFileInput {...props} cloudinary={cloudinary} />
);
ReactDOM.render(
  <React.StrictMode>
    <App ImageFileInput={imageFileInput} authService={authService} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
