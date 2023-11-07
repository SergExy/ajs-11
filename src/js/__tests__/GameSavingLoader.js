import GameSavingLoader from '../GameSavingLoader';

test('test GameSavingLoader', async () => {
  expect.assertions(1);
  try {
    const data = await GameSavingLoader.load();
    const expected = {
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1,
        name: 'Hitman',
        level: 10,
        points: 2000,
      },
    };
    expect(data).toEqual(expected);
  } catch (error) {
    expect(error.name).toEqual('GameSavingLoaderError');
  }
});
