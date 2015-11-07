var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 8000;
var handler = require('./handlers');

http.createServer(handler.serveStaticFiles).listen(port);

console.log('node http server listening on http://localhost:' + port);
