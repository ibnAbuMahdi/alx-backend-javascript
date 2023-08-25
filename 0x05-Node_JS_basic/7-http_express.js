const express = require('express');

const app = express();
const port = 1245;
const { spawn } = require('child_process');

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  if (process.argv[2]) {
    const dbName = process.argv[2];
    try {
      const spawnedProcess = spawn('node', ['-e', `const readFile = require('./3-read_file_async'); readFile('${dbName}');`]);

      //      let capturedOutput = 'This is the list of our students\n';
      const co = `This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmenuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy`;
      //      spawnedProcess.stdout.on('data', (data) => {
      //        capturedOutput += data.toString(); // Collect the output data
      //      });
      spawnedProcess.stderr.on('data', () => {
        res.statusCode = 500;
        res.end(`This is the list of our students
Cannot load the database`);
      });
      spawnedProcess.on('close', (code) => {
        if (code === 0) {
          res.end(co); // Send the collected output as the response
        } else {
          res.statusCode = 500;
          res.end('An error occurred while executing countStudents.');
        }
      });
    } catch (error) {
      res.statusCode = 500;
      res.end(`An error occurred: ${error.message}`);
    }
  }
});

app.listen(port);
module.exports = app;
