// Toda vez que fazemos uma alteração, precisamos rodar o node server.js de novo no terminal.
// Para que isso não ocorra, instalamos o nodemon

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App:
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB:
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
});
requireDir("./src/models");

// Rotas:
app.use("/api", require("./src/routes"));

app.listen(3001);
