const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    console.log(request.url);
    console.dir(request.url)

    switch (request.url) {
        case '/':
            htmlHandler.getPageOne(request, response);
            break;
        case '/party.mp4':
            mediaHandler.getParty(request, response);
            break;
        case '/bling.mp3':
            mediaHandler.getBling(request, response);
            break;
        case '/bird.mp4':
            mediaHandler.getBird(request, response);
            break;
        case '/page2':
            htmlHandler.getPageTwo(request, response);
            break;
        case '/page3':
            htmlHandler.getPageThree(request, response);
            break;
        default:
            htmlHandler.getPageOne(request, response);
            break;
    }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
