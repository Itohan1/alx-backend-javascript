export default function getListStudents() {
  const first = [1, 'Guillaume', 'San Francisco'];
  const second = [2, 'James', 'Columbia'];
  const third = [5, 'Serena', 'San Francisco'];

  const dArray = [{ id: first[0], firstName: first[1], location: first[2] },
    { id: second[0], firstName: second[1], location: second[2] },
    { id: third[0], firstName: third[1], location: third[2] }];
  return dArray;
}
