/*const http = require('http');

http.get('http://nodejs.org/dost/index.json', (res) => {

  console.log(res.statusCode);

  //Tells node how to transform the bytes of data in the response to cahracters
  res.setEncoding('utf8');

  let responseBody = '';
  res.on('data', (chunk) => {
    responseBody += chunk;
  });
  // -breaks up response into chunks; bits download, instead of the whole big thing
  // -- called multiple times until complete


  res.on('end', () => {
    console.log('response body');
    const responseBodyObject = JSON.parse(responseBodyString);
    console.log(responseBody);
  });

  console.log('here');

});*/

const http = require('http');

// http.get('http://nodejs.org/dist/index.json', (res) => {
http.get('http://nodejs.org/dist/index.json', function (res) {
  console.log(res.statusCode);

  // Tells Node how to transform the bytes of data in the response
  // to characters
  res.setEncoding('utf8');

  let responseBodyString = '';
  // res.on('data', (chunk) => {
  res.on('data', function (chunk) {
    console.log('nom');
    responseBodyString += chunk;
  });

  // res.on('end', () => {
  res.on('end', function () {
    console.log('response body:');
    const responseBodyObject = JSON.parse(responseBodyString);
    console.log(responseBodyObject);
  });

  console.log('here');
});