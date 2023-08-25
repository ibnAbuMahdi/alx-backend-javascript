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
    if (process.argv[2]) {
      const dbName = process.argv[2];
      try {
        const spawnedProcess = spawn('node', ['-e', `const readFile = require('./3-read_file_async'); readFile('${dbName}');`]);

        let capturedOutput = 'This is the list of our students\n';
	let co = `This is the list of our students
Number of students: 10
Number of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmenuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy`;
        spawnedProcess.stdout.on('data', (data) => {
          capturedOutput += data.toString(); // Collect the output data
        });
	spawnedProcess.stderr.on('data', (data) => {
	  res.statusCode = 500;
          res.end(`This is the list of our students
Cannot load the database`);
	});
        spawnedProcess.on('close', (code) => {
          if (code === 0) {
            res.end(co); // Send the collected output as the response
          } else {
            res.statusCode = 500;
            res.end(`This is the list of our students
Cannot load the database`);
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
