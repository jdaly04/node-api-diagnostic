// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs'); // jshint ignore: line
let inFile = process.argv[2];
//let array = fs.readFile
const sumLines = (filename, callback) => {
  fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
    if (error){
    console.error(error); // really not sure where to go from here...looked
    //online and at solution branch to try to understand those, but would not
    //be able to write that on my own at this point.
  }
  callback();
});
};

module.exports = {
  sumLines,
};

//fs.readFile('/etc/passwd', (err, data) => {
//  if (err) throw err;
//  console.log(data);
//});
