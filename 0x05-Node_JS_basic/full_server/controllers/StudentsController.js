import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    const path = process.argv[2];
    try {
      const dFile = await readDatabase(path);
      return response.status(200).send(dFile);
    } catch (error) {
      console.error('Error retrieving data:', error);
      return response.status(500);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const path = process.argv[2];
      const dFile = await readDatabase(path);
      return response.status(200).send(dFile);
    } catch (error) {
      return response.status(500);
    }
  }
}

module.exports = StudentsController;
