export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('name must be a string');
    }
    if (Number.isInteger(length)) {
      this._length = length;
    } else {
      throw new TypeError('length must be an integer');
    }
    if (Array.isArray(students)) {
      if (students.length && typeof students[0] === 'string') {
        this._students = students;
      } else {
        throw new TypeError('students must be an array of strings');
      }
    } else {
      throw new TypeError('students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(l) {
    if (Number.isInteger(l)) {
      this._length = l;
    } else {
      throw new TypeError('length must be an integer');
    }
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (Array.isArray(students)) {
      if (students.length && typeof students[0] === 'string') {
        this._students = students;
      } else {
        throw new TypeError('students must be an array of strings');
      }
    } else {
      throw new TypeError('students must be an array of strings');
    }
  }
}
