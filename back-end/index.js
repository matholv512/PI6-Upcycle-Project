const express = require("express");
const http = require("http");
const cors = require('cors');
const path = require("path");
const fs = require("fs");
require("./src/database/indexDb.js");

const app = express();
app.use(cors({ origin: '*' }));

app.use(express.json({ limit: "100mb" }));


const userRoutes = require("./src/api/routes/userRoutes");
const publicationRoutes = require("./src/api/routes/publicationRoutes");
const commentRoutes = require("./src/api/routes/commentRoutes.js");

app.use(userRoutes);
app.use(publicationRoutes);
app.use(commentRoutes);

app.set("url", "http://localhost:");
app.set("port", 3000);

http.createServer(app).listen(app.get("port"), function () {
  console.log(
    "Servidor rodando na porta: " + app.get("url") + app.get("port")
  );
});

module.exports = app;
