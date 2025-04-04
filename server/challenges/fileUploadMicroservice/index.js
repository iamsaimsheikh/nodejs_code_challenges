const express = require("express");
const cors = require("cors");
const multer = require("multer");
const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/upload", upload.single("file"), async (req, res) => {
  console.log("Received file:", req.file);
  res.json({
    message: `File Upload Successful: ${req.file.originalname}`,
  });
});

app.use("/", (req, res) => {
  return res.status(200).send("File Server Running.");
});

app.listen(3001, () => {
  console.log("File Server Started At Port: 3001");
});
