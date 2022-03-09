/* eslint-disable class-methods-use-this */
import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebaseApp.auth().signOut();
  }

  onAuthStateChanged(cb) {
    firebaseApp.auth().onAuthStateChanged(user => {
      return cb(user);
    });
  }
}

export default AuthService;
