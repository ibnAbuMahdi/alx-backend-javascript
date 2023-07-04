export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  const val = weakMap.get(endpoint);
  if (val >= 5) {
    throw new Error('Endpoint load is high');
  } else if (val > 0) {
    weakMap.set(endpoint, val + 1);
  } else if ('protocol' in endpoint && 'name' in endpoint) {
    weakMap.set(endpoint, 1);
  }
}
