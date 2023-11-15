# Node File System, Building a Server, and Using Express

**Objective**: Gain practical experience with the Node.js File System module, building servers, and using Express for routing.

## Tasks Overview

- [File System Task](#file-system-task): Learn to read and write files.
- [Building a Server](#building-a-server): Create a server that renders HTML.
- [Express Routing](#express-routing): Implement routing with Express.
- [PUT Request Implementation](#put-request-implementation): Handle PUT requests to update JSON data.

---

## File System Task

**Goal**: Manipulate text files and HTML with Node.js.

1. In the `node-server` folder, create `textfile.txt`.
2. Add sample text to `textfile.txt`.
3. Run `node src/index.js` to output file contents in the console.
4. Create `index.html` with basic HTML structure.
5. Modify `src/index.js` to serve `index.html`, and rerun the server.

---

## Building a Server

**Goal**: Build a server to render HTML content.

1. Enhance `index.html` with more complex HTML.
2. Use the following code in `src/index.js` to serve `index.html`:

   ```js
   var http = require("http"),
     fs = require("fs");

   var server = http
     .createServer(function (request, response) {
       fs.readFile("./index.html", function (err, html) {
         if (err) {
           throw err;
         }
         response.writeHeader(200, { "Content-Type": "text/html" });
         response.write(html);
         response.end();
       });
     })
     .listen(8080);
   ```

3. Start the server and navigate to `http://localhost:8080/` to see the HTML page.
4. Modify the server for different URL conditions, returning a 404 status for unmatched routes.

### Visual Aid for Building a Server

![Node Server with Routes](/docs/node-server-routes.png)

---

## Express Routing

**Goal**: Implement Express routing to handle JSON data.

1. Install Express dependencies: Run `npm install` in the terminal.
2. Open `server.js` and set up Express:

   ```js
   var express = require("express");
   var app = express();
   app.use(express.json()); // For parsing JSON requests
   ```

3. Add a GET route in `server.js` to return `profiles.json` content at `http://localhost:8080/profiles`.
4. Test the server with `node src/server.js` and visit the URL in a browser or Postman.
5. Implement an additional GET route for `http://localhost:8080/profiles/view` to return profile information as HTML.

### Expected Results for Express Routing

Visiting `http://localhost:8080/profiles/view` displays profile names and bios as HTML.

![Node Server showing profiles](/docs/node-server-profiles.png)

---

## PUT Request Implementation

**Goal**: Update `profiles.json` via PUT requests.

### Steps for PUT Request

1. Open `server.js` in the `logger` folder.
2. Implement a PUT route `/api/profiles/:id`.
3. Update `profiles.json` with new data upon receiving a PUT request.
4. Test using Postman with the following JSON data:

   ```json
   {
     "firstname": "Jessica",
     "lastname": "Jones",
     "age": 35
   }
   ```

### Handling and Testing

- Ensure correct functionality by replacing the specified profile in `profiles.json`.
- Handle non-existent IDs with a `404 Not Found` status.

### Expected Outcomes

- **Success**: `PUT http://localhost:3000/profiles/1` updates the profile and returns `200 OK`.
- **Failure**: `PUT http://localhost:3000/profiles/567` returns `404 Not Found` if the ID does not exist.

### Conclusion

This README provides a step-by-step guide to understand file handling, server setup, Express routing, and PUT request handling in Node.js.
