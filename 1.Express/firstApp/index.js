const express = require("express");
const app = express();

//This will display all of the methods in the module
//console.dir(app);

const PORT = 800;

//anytime we have an incoming request, this triggers.
//Its listening for request

app.use((req, res) => {
  console.log("WE GO A NEW REQUEST");
  res.send("Hello, your request has been recieved!");
});

//! REQ : Creates an object based on the incoming request
// LINK : https://expressjs.com/en/5x/api.html#req
//! RES : Generates an http response to whoever sent the request
// LINK : https://expressjs.com/en/5x/api.html#res

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
