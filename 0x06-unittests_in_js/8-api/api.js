const express = require("express");
const app = express();
const port = 7865;


app.get("/", (req, res) => {
	res.send("Welcome to the payment system");
	res.end();
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

module.exports = app
