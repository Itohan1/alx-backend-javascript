import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {
  it('should round a and b and return the sum', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('should round a and b and return the subtraction', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('should round a and b and return the division', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('should round a and b and return the division', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
