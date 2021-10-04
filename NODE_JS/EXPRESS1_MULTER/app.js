const express = require("express");
const app = express();
const port = 4000;
const multer = require("multer");
const path = require("path");
``
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/upload", (req, res) => {
  res.render("index.ejs");
});
app.post("/upload", upload.single("image"), (req, res) => {
  res.send("Image Uploaded");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/upload`);
});
