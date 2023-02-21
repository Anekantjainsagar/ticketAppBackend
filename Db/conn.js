const mongoose = require("mongoose");

const createDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database Connection Successful");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = createDatabase;
