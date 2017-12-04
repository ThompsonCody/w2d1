let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
};

var getAndPrintHtml = (options) => {
  const http = require('http');

  let buff      = new Buffer(26),
      resString = '';

  // console.log(buff.length);

  http.request(options, (res) => {
    res.on('data', (chunk) => {
      for(let c in buff.length){
        c = chunk;
        buff[c] = c + 97;
      }
      resString += chunk;
    });

    res.on('end', (chunk) => {
      console.log('response body \n', resString);
    })
  }).end();
}

getAndPrintHtml(requestOptions);





