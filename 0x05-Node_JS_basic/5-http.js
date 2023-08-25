const http = require('http');
const { spawn } = require('child_process');

const hostname = '127.0.0.1';

const port = 1245;

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
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
            res.end(capturedOutput); // Send the collected output as the response
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
  }
});

app.listen(port, hostname);
module.exports = app;
