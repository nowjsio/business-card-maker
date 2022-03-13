class AuthService {
  constructor(firebaseApp) {
    this.firebaseApp = firebaseApp;
  }

  login(providerName) {
    const authProvider = this.firebaseApp.getProvider(providerName);
    return this.firebaseApp.getAuth().signInWithPopup(authProvider);
  }

  logout() {
    this.firebaseApp.getAuth().signOut();
  }

  onAuthStateChanged(cb) {
    this.firebaseApp.getAuth().onAuthStateChanged(user => {
      return cb(user);
    });
  }
}

export default AuthService;
