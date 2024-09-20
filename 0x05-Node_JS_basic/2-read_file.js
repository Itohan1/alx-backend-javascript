const fs = require('fs');

function countStudents(path) {
  try {
    const fileStream = fs.readFileSync(path, 'utf-8');
    const dlines = fileStream.trim().split('\n').filter((line) => line);

    const students = dlines.slice(1);

    if (students.length === 0) {
      throw new Error('No valid students in the file.');
    }

    const checkList1 = [];
    const checkList2 = [];

    students.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (!firstname || !field) {
        return;
      }

      if (field === 'CS') {
        checkList1.push(firstname);
      } else if (field === 'SWE') {
        checkList2.push(firstname);
      }
    });

    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${checkList1.length}. List: ${checkList1.join(', ')}`);
    console.log(`Number of students in SWE: ${checkList2.length}. List: ${checkList2.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
