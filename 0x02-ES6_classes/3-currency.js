export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    } else {
      throw new TypeError('code must be string');
    }
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('name must be a string');
    }
  }

  set code(c) {
    if (typeof c === 'string') {
      this._code = c;
    } else {
      throw new TypeError('code must be string');
    }
  }

  get code() {
    return this._code;
  }

  set name(c) {
    if (typeof c === 'string') {
      this._name = c;
    } else {
      throw new TypeError('code must be string');
    }
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
