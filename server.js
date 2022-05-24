const express = require("express");
const router = require("./app/router.js");

const app = express();

app.use(express.json());

app.use("/api", router);

app.use((_, res) => {
	res.status(404).send("404 not found");
});

module.exports = app;
