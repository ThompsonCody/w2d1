function getAndPrintHTMLChunks() {

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

getAndPrintHTMLChunks();