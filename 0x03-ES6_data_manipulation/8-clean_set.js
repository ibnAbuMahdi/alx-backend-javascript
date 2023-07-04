export default function cleanSet(set, start) {
  if (!(set instanceof Set)) {
    throw new Error('Invalid input: set must be an instance of Set');
  }

  if (typeof start !== 'string') {
    throw new Error('Invalid input: start must be a string');
  }

  let out = '';

  for (const str of set) {
    if (typeof str !== 'string') {
      throw new Error('Invalid input: set elements must be strings');
    }

    if (start.length > 0 && str.startsWith(start)) {
      if (out.length > 0) {
        out += '-';
      }
      out += str.substring(start.length);
    }
  }

  return out;
}
