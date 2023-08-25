const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    let entries = [];
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) { reject(new Error('Cannot load the database')); } else {
        entries = data.split('\n');
        let count = 0;
        const summary = {};
        for (const line of entries.slice(1)) {
          if (line.trim().length) {
            const items = line.split(',');
            const ls = items.length - 1;
            if (Object.keys(summary).includes(items[ls])) {
              const lst = summary[items[ls]];
              lst.push(items[0]);
              summary[items[ls]] = lst;
            } else {
              summary[items[ls]] = [items[0]];
            }
            count += 1;
          }
        }
        console.log("Number of students: "+count);
        for (const field of Object.keys(summary)) {
          console.log("Number of students in "+field+": "+summary[field].length+". List: "+summary[field].join(', '));
        }
        resolve();
      }
    });
  });
}
module.exports = countStudents;
