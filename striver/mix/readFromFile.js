// How to read data from another file
let fs = require('fs');
let filename = './graphs/input1.txt';
fs.readFile(filename, 'utf8', function (err, data) {
  if (err) console.log(err);
  console.log('OK: ' + filename);
  console.log(data);
});
