export default function updateStudeentGradeByCity(list, city, grades) {
  if (Array.isArray(list) && typeof city === 'string') {
    return list.filter((a) => a.location === city).map(
      (o) => {
        const obj = o;
        const found = grades.find((c) => c.studentId === o.id);
        obj.grade = found ? found.grade : 'N/A';
        return obj;
      },
    );
  }
  return [];
}
