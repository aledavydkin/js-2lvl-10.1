import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  constructor(id, created, userInfo, {
    idUser, nameUser, levelUser, pointsUser,
  }) {
    this.id = id;
    this.created = created;
    this.userInfo = {
      id: idUser,
      name: nameUser,
      level: levelUser,
      points: pointsUser,
    };
  }

  static load() {
    return new Promise((resolve) => {
      const data = read();
      data.then((response) => {
        const value = json(response);
        return value;
      }).then((value) => {
        resolve(value);
      });
    });
  }
}
