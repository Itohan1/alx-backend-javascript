export default function groceriesList() {
  const map = new Map();
  const items = [
    { name: 'Apples', quantity: 10 },
    { name: 'Tomatoes', quantity: 10 },
    { name: 'Pasta', quantity: 1 },
    { name: 'Rice', quantity: 1 },
    { name: 'Banana', quantity: 5 },
  ];
  items.forEach((result) => {
    map.set(result.name, result.quantity);
  });
  return map;
}
