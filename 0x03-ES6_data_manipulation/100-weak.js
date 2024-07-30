const weakMap = new WeakMap();
export { weakMap };
export function queryAPI(values) {
  const list = [];
  if (typeof values !== 'object') {
    throw new TypeError('Expected an Object');
  }
  for (const [key, value] of Object.entries(values)) {
    list.push(weakMap.set({ [key]: key }, value));
  }
  return list;
}
