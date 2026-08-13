const express = require("express");

const app = express();

const PORT = 3000;

// ==============================================================================
// APPLICATION-LEVEL CUSTOM MIDDLEWARE (Used for all incoming requests)
// ==============================================================================

// Middleware to log the request URL and Time before handler
// Middleware to add a custom header to all responses

app.use((req, res, next) => {
    console.log("M1 BEFORE");

    next();

    console.log("M1 AFTER");
});

app.use((req, res, next) => {
    console.log("M2 BEFORE");

    next();

    console.log("M2 AFTER");
});

app.get("/", (req, res) => {
    console.log("HANDLER");
    res.send("Hello");
});

app.listen(PORT, (req, res) => {
    console.log("server  started");
})