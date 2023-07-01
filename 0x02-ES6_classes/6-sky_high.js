import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw new TypeError('floors must be number');
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(floors) {
    if (typeof floors === 'number') {
      this._sqft = floors;
    } else {
      throw new TypeError('sqft must be number');
    }
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
      throw new TypeError('floors must be number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
