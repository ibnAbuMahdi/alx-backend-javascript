export default function appendToEachArrayValue(array, appendString) {
  const i = [];
  for (let idx of array) {
    const value = idx;
    idx = appendString + value;
    i[i.length] = idx;
  }

  return i;
}
