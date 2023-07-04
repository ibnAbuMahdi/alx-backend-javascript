export default function cleanSet(set, start) {
  let out = '';
  for (const str of set) {
    if (start.length && str.startsWith(start)) {
      if (out.length) {
        out += '-';
      }
      out += str.substring(start.length);
    }
  }
  return out;
}
