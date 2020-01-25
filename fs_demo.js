const fs = require('fs');
const path = require('path');

// create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if (err) throw err;
//   console.log('Folder created ....');
// });

// create and write to file

// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.text'),
//   'Hello world',
//   {},
//   err => {
//     if (err) throw err;
//     console.log('Folder created ....');
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.text'),
//       'Hello world',
//       {},
//       err => {
//         if (err) throw err;
//         console.log('Folder created ....');
//       }
//     );
//   }
// );

//read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

//rename
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  err => {
    if (err) throw err;
    console.log('File renamed');
  }
);
