const express = require("express");
const http = require("http");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
require("./src/database/indexDb.js");

const app = express();

app.use(express.json());

const userRoutes = require("./src/api/routes/userRoutes");
const publicationRoutes = require("./src/api/routes/publicationRoutes");

app.use(userRoutes);
app.use(publicationRoutes);

app.set("url", "http://localhost:");
app.set("port", 3000);

const uploadDirectory = "uploads";

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
  destination: function (req, uploadFile, callback) {
    callback(null, uploadDirectory);
  },
  filename: function (req, uploadFile, callback) {
    callback(
      null,
      "-" +
        uploadFile.originalname +
        "-" +
        Date.now() +
        path.extname(uploadFile.originalname)
    );
  },
});

const upload = multer({ storage });

app.post("/upload", upload.array("uploadFile"), (req, res) => {
  res.status(200).json({message: "Arquivo enviado com sucesso!"});
});

http.createServer(app).listen(app.get("port"), function () {
  console.log(
    "Servidor rodando na porta: " + app.get("url") + app.get("port")
  );
});

module.exports = app;
