const request = require('request');
const fs = require('fs');

console.log("Downloading your stupid image... le sigh....\n");
request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', (err) =>{
          throw err;
       })
       .on('response', (res) => {
          console.log(res.statusMessage);
          console.log(res.headers['content-type']);
       })
       .on('end', () => {
          console.log("\n... there ya go");
       }).pipe(fs.createWriteStream('./future.jpg'));




