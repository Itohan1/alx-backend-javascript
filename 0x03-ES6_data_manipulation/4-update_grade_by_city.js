export default function updateStudentGradeByCity(students, city, grades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrades = grades.find((grade) => grade.studentId === student.id);
      const grade = newGrades ? newGrades.grade : 'N/A';
      return { ...student, grade };
    });
}
