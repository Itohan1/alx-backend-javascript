(async () => {
  const chai = await import('chai');
  const { expect } = chai;
  const calNum = await import('./2-calcul_chai');

  describe('calNum', () => {
    it('should round a and b and return the sum', () => {
      expect(calNum('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should round a and b and return the subtraction', () => {
      expect(calNum('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should round a and b and return the division', () => {
      expect(calNum('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should round a and b and return the division', () => {
      expect(calNum('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
})();
