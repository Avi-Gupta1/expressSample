const express = require("express");
const app = express();

// app.use(express.static("public"))npm start;
console.log("hello world in EC2 @");
app.listen(3000, console.log("listening on port 3000"));