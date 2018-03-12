const fs = require('fs');

fs.readFile('data.txt', function(err, data) {
  // If an error occurred, handle it (throw, propagate, etc)
  if(err) {
    throw err;
  }
  // Otherwise, use the data
  console.log(data.toString("utf-8"));
});

let a = [1,2,3,4,5,6,7,8,9,11,2,3,4,56,7,8,80]
a.forEach(element => {
  console.log(element);
});

fs.readFile("data2.txt", function(err, data) {
  // If an error occurred, handle it (throw, propagate, etc)
  if (err) {
    throw err;
  }
  // Otherwise, use the data
  console.log(data.toString("utf-8"));
});