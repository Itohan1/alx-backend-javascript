const fs = require('fs');
const readline = require('readline');

function countStudents(path) {
  try {
    const fileStream = fs.createReadStream(path);
    fileStream.on('error', () => {
      throw new Error('Cannot load the database');
    });
    const file = readline.createInterface({
      input: fileStream,
      output: process.stdout,
      terminal: false,
    });

    const checkList1 = [];
    const checkList2 = [];
    file.on('line', (line) => {
      const result = line.split(',');

      if (result[3] === 'CS') {
        checkList1.push(result[0]);
      }

      if (result[3] === 'SWE') {
        checkList2.push(result[0]);
      }
    });
    file.on('close', () => {
      const totalStudents = checkList1.length + checkList2.length;
      console.log(`Number of students: ${totalStudents}`);
      console.log(`Number of students in CS: ${checkList1.length}. List: ${checkList1.join(', ')}`);
      console.log(`Number of students in SWE: ${checkList2.length}. List: ${checkList2.join(', ')}`);
    });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
