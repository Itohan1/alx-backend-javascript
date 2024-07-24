import getResponseFromAPI from './0-promise';

describe('getResponseFromAPI', () => {
  test('correct response when success is true', () => {
    response = getResponseFromAPI()
    return response
      .then(response => {
        expect(response).toEqual(true)
      })
      .catch(() => {
        expect(true).toBe(false);
      });
  });

  test('error message when success is false', () => {
    return getResponseFromApi()
      .then(() => {
        expect(true).toBe(false);
      });
      .catch(error => {
        expect(error).toEqual(new Error('Not working correctly'));
      });
  });
});
