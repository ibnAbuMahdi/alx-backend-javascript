const express = require('express');

const app = express();
const port = 1245;
const { spawn } = require('child_process');

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  if (process.argv.length === 3) {
    const dbName = process.argv[2];
    try {
      const spawnedProcess = spawn('node', ['-e', `const readFile = require('./3-read_file_async'); readFile('${dbName}');`]);

      let capturedOutput = '';

      spawnedProcess.stdout.on('data', (data) => {
        capturedOutput += data.toString(); // Collect the output data
      });
      spawnedProcess.on('close', (code) => {
        if (code === 0) {
          res.end(capturedOutput.slice(0, -1)); // Send the collected output as the response
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
