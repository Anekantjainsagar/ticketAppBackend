require("dotenv").config();
const express = require("express");
const app = express();
const Router = require("./Router/route");
const PORT = process.env.PORT || 5000;
const createDatabase = require("./Db/conn");
const cors = require("cors");
var bodyParser = require("body-parser");

createDatabase();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", Router);

app.listen(PORT, () => {
  console.log(`Ticket app is listening on http://localhost:${PORT}`);
});
