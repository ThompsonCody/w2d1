/*function getAndPrintHTMLChunks() {

  const http = require('http');
  let resStr = '';


  let reqOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  callback = (response) => {
    response.on('data', (chunk) => {
      console.log("I hope this likes Jam'n too")
      resStr += chunk;
    });


    response.on('end', () => {
      // const responseBodyObject = JSON.parse(resStr);
      console.log('response body', resStr);
      console.log(req.data);
    });

  }


  let req = http.request(reqOptions, callback).end();

}

getAndPrintHTMLChunks();*/

const http = require('http');

var getAndPrintHTMLChunks = () => {

  let resStr = '';

  let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  let request = http.request(requestOptions, (response) => {
    response.on('data', (chunk) => {
      console.log("--- I have some data chunk's jam'n baby ---\n", chunk);
      resStr += chunk;
    });
    response.on('end', () => {
      console.log('-- response body --\n', resStr);
      console.log(request.data);
    });
  }).end();
}

getAndPrintHTMLChunks();