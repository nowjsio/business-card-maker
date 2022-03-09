/* eslint-disable class-methods-use-this */
import firebase from 'firebase';

class AuthService {
  constructor(firebaseApp) {
    this.firebaseApp = firebaseApp;
  }

  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return this.firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    this.firebaseApp.auth().signOut();
  }

  onAuthStateChanged(cb) {
    this.firebaseApp.auth().onAuthStateChanged(user => {
      return cb(user);
    });
  }
}

export default AuthService;
