const fs = require('fs');
const readline = require('readline');

function countStudents(path) {
  try {
    const fileStream = fs.createReadStream(path);
    const file = readline.createInterface({
      input: fileStream,
      output: process.stdout,
      terminal: false,
    });

    const checkList1 = [];
    const checkList2 = [];
    let lineNumber1 = 0;
    let lineNumber2 = 0;
    file.on('line', (line) => {
      const result = line.split(',');

      if (result[3] === 'CS') {
        lineNumber1 += 1;
        checkList1.push(result[0]);
      }

      if (result[3] === 'SWE') {
        lineNumber2 += 1;
        checkList2.push(result[0]);
      }
    });
    file.on('close', () => {
      const totalStudents = lineNumber1 + lineNumber2;
      console.log(`Number of students: ${totalStudents}`);
      console.log(`Number of students in CS: ${lineNumber1}. List: ${checkList1.join(', ')}`);
      console.log(`Number of students in SWE: ${lineNumber2}. List: ${checkList2.join(', ')}`);
    });
    fileStream.on('error', () => {
      throw new Error('Cannot load the database');
    });
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
