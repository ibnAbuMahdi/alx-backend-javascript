const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    let entries = [];
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) { reject(err); } else {
        entries = data.split('\n');
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
          }
        }
        resolve(summary);
      }
    });
  });
}
module.exports = readDatabase;
