const express = require("express");
const router = express.Router();
const data = require("../dummy-data/data.json");


// const data = {
// 	slackUsername: "codes_oracle",
// 	backend: true,
// 	age: 22,
// 	bio: "I am a software developer and musician with a passion for learning and trying out new technologies",
// };
  
router.get("/", (req, res) => {
	res.send("Hello World");
});
  
router.get("/user", (req, res) => {
	res.json(data);
});

  
module.exports = router;
