const express = require("express");
const app = express();
const rateLimiter = require("./challenges/rateLimiterMiddleware");
const fileUpload = require("express-fileupload");
const fileUploadService = require("./challenges/fileUploadService")

app.use(rateLimiter);
app.use(fileUpload());

app.use("/upload", fileUploadService);
app.use("/", (req, res) => {
  return res.status(200).send("working");
});


app.listen(3000, () => {
  console.log("server running on port 3000");
});
