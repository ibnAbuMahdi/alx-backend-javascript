export default function getStudentsByLocation(list, city) {
  return Array.isArray(list) && typeof city === 'string' ? list.filter((obj) => obj.location === city) : [];
}
