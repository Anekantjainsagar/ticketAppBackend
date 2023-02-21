const express = require("express");
const Router = express.Router();
const User = require("../Db/Model/userSchema");

Router.post("/bookTicket", (req, res) => {
  const {
    branch,
    year,
    contact,
    enrollment,
    scholar,
    email,
    name,
    transectionId,
  } = req.body;

  User.findOne({ email }, (err, data) => {
    if (!data) {
      const user = new User({
        branch,
        year,
        contact,
        enrollment,
        scholar,
        email,
        name,
        transectionId,
      });

      user
        .save()
        .then(() => {
          res.status(200).send("User saved successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      res.status(202).send("Email already exists");
    }
  });
});

Router.post("/getTickets", async (req, res) => {
  const user = await User.find();
  res.send(user);
});

Router.get("/ticketCheck/:id", (req, res) => {
  const { id } = req.params;
  User.findOne({ _id: id }, (err, data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(202).send("User not found");
    }
  });
});

Router.post("/checkEmail", (req, res) => {
  const { email } = req.body;
  User.findOne({ email }, (err, data) => {
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(202).send("User not found");
    }
  });
});

module.exports = Router;
