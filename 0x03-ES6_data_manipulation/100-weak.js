export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let val = weakMap.get(endpoint);

  if (typeof val !== 'number') {
    val = 0;
  }

  if (val >= 5) {
    throw new Error('Endpoint load is high');
  } else if (val > 0) {
    weakMap.set(endpoint, val + 1);
  } else if (
    typeof endpoint === 'object'
    && endpoint !== null
    && 'protocol' in endpoint
    && typeof endpoint.protocol === 'string'
    && 'name' in endpoint
    && typeof endpoint.name === 'string'
  ) {
    weakMap.set(endpoint, 1);
  } else {
    throw new Error('Invalid endpoint');
  }
}
