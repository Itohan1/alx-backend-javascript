export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('Cannot instantiate abstract class Building directly');
    }
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  static validate(subclass) {
    if (typeof subclass.prototype.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
