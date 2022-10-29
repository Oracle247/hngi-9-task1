const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Express body parser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//To handle cors errors
app.use(cors());

// For Static files
app.use(express.static("public"));

// Routes
app.use("/", require("./routes/index.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
	//Initialize MongoDB
	console.log(`:::> Server listening on port ${PORT} @ http://localhost:${PORT}`);
});

// On  server error
app.on("error", (error) => {
	console.error(`<::: An error occurred on the server: \n ${error}`);
});