const http = require("http");
const express = require('express')
const app = express()
const path = require('path')

app.use('/content',express.static(path.join(__dirname,'public')))


app.get('/',(req, res) =>{
  res.sendFile('./public/index.html', {root:__dirname})
}
)

app.listen(8080);

// http.createServer(function (req, res) {
//   res.statusCode )= 200;
//   res.setHeader("Content-Type", "application/json"); // Set Content-Type(tells client what type of content to process data ) to JSON
//   const responseData = {
//     greeting: 'Hey',
//     name: 'Nura'
//   };
//   res.end(JSON.stringify(responseData)); // Convert the object to JSON string before sending
// }).listen(8080);
