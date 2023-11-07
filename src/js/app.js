import GameSavingLoader from './GameSavingLoader';

export default (async () => {
  try {
    const saving = await GameSavingLoader.load();
    return saving;
  } catch (error) {
    throw new Error('error.message');
  }
})();
