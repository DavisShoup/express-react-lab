// Dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// JSON Files
const projects = require("./projects.json");
const about = require("./about.json");

// Create app
const app = express();

// Middleware
app.use(cors());

// Routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/projects", (req, res) => {
    res.json(projects);
});

app.get("/about", (req, res) => {
    res.json(about);
});

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
