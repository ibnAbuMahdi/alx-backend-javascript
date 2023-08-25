const { readDatabase } = require('../utils'); // Replace with actual path to utils.js

export class StudentsController {
    static async getAllStudents(request, response) {
        try {
            const data = await readDatabase('../database.csv'); // Replace with actual path

            const fields = data;

            response.status(200).set('Content-Type', 'text/plain');
            let out = 'This is the list of our students';

            Object.keys(fields).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).forEach((major) => {
                out += `\nNumber of students in ${major}: ${fields[major].length}. List: ${fields[major].join(', ')}`;
            });

            response.send(out);
        } catch (error) {
            response.status(500).set('Content-Type', 'text/plain');
            response.send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(request, response) {
        const query = url.parse(request.url, true).query;
        const major = query.major;

        if (major !== 'CS' && major !== 'SWE') {
            response.status(500).set('Content-Type', 'text/plain');
            response.send('Major parameter must be CS or SWE');
            return;
        }

        try {
            const data = await readDatabase('../database.csv'); // Replace with actual path

            const students = data[major] || [];

            response.status(200).set('Content-Type', 'text/plain' );
            response.send(`List: ${students.join(', ')}`);
        } catch (error) {
            response.status(500).set('Content-Type', 'text/plain' );
            response.end('Cannot load the database');
        }
    }
}

