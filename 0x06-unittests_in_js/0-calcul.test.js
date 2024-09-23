const assert = require('assert');
const calNum = require('./0-calcul');

describe('calNum', () => {
  it('It should round a and b and return the sum', () => {
    assert.strictEqual(calNum(1, 3), 4);
  });

  it('It should round a and b and return the sum', () => {
    assert.strictEqual(calNum(1, 3.7), 5);
  });

  it('It should round a and b and return the sum', () => {
    assert.strictEqual(calNum(1.2, 3.7), 5);
  });

  it('It should round a and b and return the sum', () => {
    assert.strictEqual(calNum(1.5, 3.7), 6);
  });
});
