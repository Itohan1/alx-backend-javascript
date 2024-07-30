export default function cleanSet(set, startString) {
  if (startString.length < 1) {
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
