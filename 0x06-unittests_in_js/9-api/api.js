const express = require("express");
const app = express();
const port = 7865;


app.get("/", (req, res) => {
	res.send("Welcome to the payment system");
});

app.get("/cart/:id([0-9]+)", (req, res) => {
//	if ( Number.parseInt(req.params["id"], 10)){
//		res.statusCode = 404;
//		res.end()
//	}
	res.statusCode = 200
	res.send(`Payment methods for cart ${req.params["id"]}`);
});
app.listen(port, () => {
	console.log(`API available on localhost port ${port}`);
});

module.exports = app;
