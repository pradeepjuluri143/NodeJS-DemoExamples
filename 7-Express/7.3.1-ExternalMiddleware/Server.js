// server.js

// Import Express
const express = require("express");

// Import Morgan
const morgan = require("morgan");

// Create an Express application
const app = express();

// Port on which our server will run
const PORT = 3000;


// ------------------------------------------------------
// MORGAN MIDDLEWARE
// ------------------------------------------------------

// Morgan is a logging middleware.
//
// It starts executing when a request comes in.
// It waits for the response to finish,
// and then prints information about the request.
//
// "dev" is Morgan's simple predefined logging format.
app.use(morgan("dev"));




// ------------------------------------------------------
// ROUTE HANDLER
// ------------------------------------------------------

app.get("/", (req, res) => {

  console.log("Route Handler - Processing request");

  // Send response to the browser.
  res.send("Hello from Express!");
});

app.get("/greet/:name", (req, res) => {

  console.log("Route Handler - Processing request");

  // Send response to the browser.
  res.send(`Hello ${req.params.name}!`);
});


// ------------------------------------------------------
// START SERVER
// ------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});