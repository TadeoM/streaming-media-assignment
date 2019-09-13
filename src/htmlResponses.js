const fs = require('fs'); // pull in the file system module

const page1 = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const getPageOne = (request, response) =>{
    getIndex(request, response, page1);
};

const getPageTwo = (request, response) => {
    getIndex(request, response, page2);
};

const getPageThree = (request, response) => {
    getIndex(request, response, page3);
};

const getIndex = (request, response, index) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

module.exports.getPageOne = getPageOne;
module.exports.getPageTwo = getPageTwo;
module.exports.getPageThree = getPageThree;

