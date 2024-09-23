const readFile = require('fs').promises;

async function readDatabase(path) {
  try {
    const database = await readFile(path, 'utf-8');
    const dline = database.trim().split('\n').filter((line) => line);

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
    let result = `Number of students: ${checkLine.length}\n`
    result += `Number of students in CS: ${firstList.length}. List: ${firstList.join(', ')}\n`
    result += `Number of students in SWE: ${secondList.length}. List: ${secondList.join(', ')}`
    return result
  } catch (error) {
   throw new Error('Database was not accessible');
  }
};

module.exports = readDatabase;
