export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    map.forEach((val, key, m) => {
      m.set(key, val === 1 ? 100 : val);
    });
  } else {
    throw new Error('Cannot process');
  }
}
