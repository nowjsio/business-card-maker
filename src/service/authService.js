import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
  // eslint-disable-next-line class-methods-use-this
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
