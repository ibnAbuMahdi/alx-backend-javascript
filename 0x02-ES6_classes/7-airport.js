export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('name must be string');
    }
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('code must be string');
    }
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
