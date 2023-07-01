export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else {
      throw new TypeError('sqft must be a number');
    }
    if (Object.getPrototypeOf(this) !== Building.prototype
&& this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
  }

  evacuationWarningMessage() {
    throw new Error("Abstract method 'evacuationWarningMessage' must be implemented.");
  }
}
