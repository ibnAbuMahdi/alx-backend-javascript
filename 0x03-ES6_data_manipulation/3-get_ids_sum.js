export default function getStudentIdsSum(list) {
  if (Array.isArray(list)) {
    const ids = list.map((a) => a.id);
    return ids.reduce((a, b) => a + b);
  }
  return 0;
}
