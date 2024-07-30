export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString === '') {
    return '';
  }

  const list = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      list.push(value.slice(startString.length));
    }
  }
  return list.join('-');
}
