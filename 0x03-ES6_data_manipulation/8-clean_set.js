export default function cleanSet(set, start) {
  let out = '';

  for (const str of set) {
    if (set instanceof Set && typeof start === 'string' && start.length > 0 && str.startsWith(start)) {
      if (out.length > 0) {
        out += '-';
      }
      out += str.substring(start.length);
    }
  }

  return out;
}
