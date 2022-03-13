class CardRepository {
  constructor(firebaseApp) {
    this.firebaseApp = firebaseApp;
    this.database = this.firebaseApp.getDataBase();
  }

  syncData = (userId, onUpdate) => {
    const ref = this.database.ref(`users/${userId}/cards`);
    ref.on('value', snapShot => {
      const datas = snapShot.val();
      // datas && onUpdate(datas);
      if (datas) {
        onUpdate(datas);
      }
    });
    return () => ref.off();
  };

  create = (userId, data) => {
    const { id } = data;
    this.checkUserId(userId);
    this.database.ref(`users/${userId}/cards/${id}`).set({
      ...data,
    });
  };

  read = userId => {
    this.checkUserId(userId);
  };

  update = userId => {
    this.checkUserId(userId);
  };

  delete = (userId, data) => {
    const { id } = data;
    this.checkUserId(userId);
    this.database.ref(`users/${userId}/cards/${id}`).remove(console.log);
  };

  checkUserId = userId => {
    if (userId === null) {
      throw new Error('userId is not inserted');
    }
  };
}

export default CardRepository;
