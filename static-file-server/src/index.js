const http = require("http");

http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json"); // Set Content-Type(tells client what type of content to process data ) to JSON
  const responseData = {
    greeting: 'Hey',
    name: 'Replace with your name'
  };
  res.end(JSON.stringify(responseData)); // Convert the object to JSON string before sending
}).listen(8080);
