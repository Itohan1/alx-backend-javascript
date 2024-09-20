const fs = require('fs').promises;

async function countStudents(path) {
  try {
    const fileRead = await fs.readFile(path, 'utf-8');
    const dline = fileRead.trim().split('\n').filter((line) => line);

    const checkLine = dline.slice(1);

    const firstList = [];
    const secondList = [];
    checkLine.forEach((line) => {
      const [firstname, , , field] = line.split(',');

      if (!firstname || !field) {
        return;
      }
      if (field === 'CS') {
        firstList.push(firstname);
      } else if (field === 'SWE') {
        secondList.push(firstname);
      }
    });
    console.log(`Number of students: ${checkLine.length}`);
    console.log(`Number of students in CS: ${firstList.length}. List: ${firstList.join(', ')}`);
    console.log(`Number of students in SWE: ${secondList.length}. List: ${secondList.join(', ')}`);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
