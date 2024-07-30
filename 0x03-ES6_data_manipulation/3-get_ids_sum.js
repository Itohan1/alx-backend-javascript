export default function getStudentIdsSum(value) {
  return value.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
