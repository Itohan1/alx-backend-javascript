const assert = require('assert');
const calNum = require('./1-calcul');

describe('calNum', () => {
  it('should round a and b and return the sum', () => {
    assert.strictEqual(calNum('SUM', 1.4, 4.5), 6);
  });

  it('should round a and b and return the subtraction', () => {
    assert.strictEqual(calNum('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should round a and b and return the division', () => {
    assert.strictEqual(calNum('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should round a and b and return the division', () => {
    assert.strictEqual(calNum('DIVIDE', 1.4, 0), 'Error');
  });
});
