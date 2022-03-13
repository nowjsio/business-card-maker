import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
// Initialize Firebase
export default class FireBaseApp {
  constructor() {
    this.app = firebase.initializeApp(firebaseConfig);
  }

  getAuth = () => {
    return this.app.auth();
  };

  getDataBase = () => {
    return this.app.database();
  };

  getProvider = providerName => {
    const lowerName = providerName.toLowerCase();
    switch (lowerName) {
      case 'google':
        return new firebase.auth.GoogleAuthProvider();
      case 'github':
        return new firebase.auth.GithubAuthProvider();
      default:
        throw new Error(`[!] not supported provider: ${providerName}`);
    }
  };
}
