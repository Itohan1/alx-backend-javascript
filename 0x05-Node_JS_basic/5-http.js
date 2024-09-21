const http = require('http');
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
    let result = `Number of students: ${checkLine.length}\n`;
    result += `Number of students in CS: ${firstList.length}. List: ${firstList.join(', ')}\n`;
    result += `Number of students in SWE: ${secondList.length}. List: ${secondList.join(', ')}`;
    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    try {
      const filePath = process.argv[2];
      if (!filePath) {
        res.end('This is the list of our students');
      } else {
        const info = await countStudents(filePath);
        res.end(`This is the list of our students\n${info}`);
      }
    } catch (error) {
      res.end('This is the list of our students\nCannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
}).listen(1245);

module.exports = app;
