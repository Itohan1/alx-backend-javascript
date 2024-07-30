export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '' || !set || !(set instanceof Set)) {
    return '';
  }

  const list = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      const valueSub = value.slice(startString.length);

      if (valueSub && valueSub !== value) {
        list.push(valueSub);
      }
    }
  }
  return list.join('-');
}
