import json from './json';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    const data = await read();
    const jsonValue = await json(data);
    const value = await JSON.parse(jsonValue);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, 500);
    });
  }
}
