const fs = require('fs').promises;
const express = require('express');

const app = express();

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
    let result = `Number of students: ${checkLine.length}\n`;
    result += `Number of students in CS: ${firstList.length}. List: ${firstList.join(', ')}\n`;
    result += `Number of students in SWE: ${secondList.length}. List: ${secondList.join(', ')}`;
    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const database = process.argv[2];

  try {
    const info = await countStudents(database);
    res.send(`This is the list of our students\n${info}`);
  } catch (error) {
    res.send('This is the list of our students');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
