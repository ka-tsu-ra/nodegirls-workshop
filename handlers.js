var static = require('node-static');

//
// Create a node-static server instance to serve the './public' folder
//

function serveStaticFiles(request, response) {
  var file = new static.Server('./public');
  file.serve(request, response);
};
//  makes a route for each filename in the /public directory.
//  .serve is a built in method in the node-static module.
// this thing creates a mini server that the main server has access to.

function getPosts() {

};

module.exports = {
  serveStaticFiles: serveStaticFiles,
  getPosts: getPosts
}
