require("dotenv").config();

const express = require("express");

const app = express();

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

app.get("/", (req, res) => {
	res.status(200).json({
		message: "Hello World",
	});
});

app.listen(process.env.SERVER_PORT, () => {
	console.log(`Server deployed on port ${process.env.SERVER_PORT}`);
});
