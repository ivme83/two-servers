// Require/import the HTTP module
var http = require("http");

var goodArr = [
  "I have a dog.",
  "I make food.",
  "I am awake."
];

var badArr = [
  "I am not a dog.",
  "I am food.",
  "I want to sleep."
];

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;
// Create a generic function to handle requests and responses
function handleRequest1(request, response) {
  let index = Math.floor(Math.random()*goodArr.length);
  console.log(request.headers.host);
  // Send the below string to the client when the user visits the PORT URL
  response.end(goodArr[index]);
}

function handleRequest2(request, response) {
  let index = Math.floor(Math.random()*badArr.length);

  // Send the below string to the client when the user visits the PORT URL
  response.end(badArr[index]);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});