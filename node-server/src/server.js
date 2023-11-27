const fs = require("fs");
const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

const getContent = () => fs.readFileSync("src/models/profiles.json", "utf-8");
app.get("/", (req, res) => {
  res.send("Morning");
  return res.end();
});

/*
Add a route to the server.js file with code that will return the contents 
of the JSON file profiles.json when a user visits the following URL:

GET http://localhost:8080/profile

Replace ... with the correct path
*/
app.get("/profile", (req, res) => {
  const content = getContent();
  res.type("json");
  res.send(content);
});

/*
  Add a route that returns a list of the profile names and bio 
  from the server as HTML elements on the endpoint below:

  GET http://localhost:8080/profiles/view 

  Replace ... with the correct path
  */
app.get("/profiles/view", (req, res) => {
  const content = getContent();
  const profiles = JSON.parse(content);
  //const elements = profiles.map((profile) => `<li><h3>${profile.firstname} ${profile.lastname}</h3>${profile.bio}</li>`);
  //let markup = "";
  //for (let i = 0; i< elements.length; i++){
  // markup += elements[i];
  //}

  const markup = profiles.reduce(
    (previous, profile) =>
      `${previous}<li><h3>
    ${profile.firstname} ${profile.lastname}
  </h3>${profile.bio}</li>`,
    ""
  );
  const html = `<ul>${markup}</ul>`;
  res.send(html);
});

app.put("/profiles/:id", (req, res) => {
  const newData = req.body;
  fs.readFile("src/models/profiles.json", "utf8", (err, data) => {
    if (err) {
      res.status(500).send("Error reading file");
      return;
    }
    const jsonData = JSON.parse(data);

    let x = jsonData.findIndex((a) => a.id == req.params.id); //find index of obj which is parameter
    if (x== -1) {
      res.status(404).send(" 404 not found");
    }
    
    jsonData[x] = newData;

    fs.writeFile(
      "src/models/profiles.json",
      JSON.stringify(jsonData, null, 2),
      (err) => {
        
        if (err) {
          res.status(500).send("Error writing file");
          return;
        }
        res.status(200).send("Data Sucsessfully updated");
      }
    );
  });
});

app.listen(port, () => {
  console.info(`Example app listening at http://localhost:${port}`);
});
