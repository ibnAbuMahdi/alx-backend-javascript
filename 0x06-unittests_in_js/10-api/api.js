const express = require("express");
const app = express();
const port = 7865;


app.get("/", (req, res) => {
	res.send("Welcome to the payment system");
});

app.get("/cart/:id(\d+)", (req, res) => {
	res.send(`Payment methods for cart ${req.params["id"]}`);
});

app.get("/available_payments", (req, res) => {
	const pmnt = { credit_cards: true, paypal: false };
        res.json({ payment_methods: pmnt });
});


app.get("/login", (req, res) => {
	const { userName } = req.body;
        res.send(`Welcome ${userName}`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
