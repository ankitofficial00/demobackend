require("dotenv").config();
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("chai aur backend");
});

app.get("/login", (req, res) => {
  res.send({
    status: 200,
    message:
      "welcome to our server our server is started and handle the request of the client ",
  });
});
const githubdata = {
  name: "ankit",
  email: "ankit@gmail.com",
  followers: "2",
  following: "2",
  islogin: "false",
};

app.get("/github", (req, res) => {
  res.json({ user: "ankit", status: 200, data: githubdata });
});
app.get("/:id", (req, res) => {
  //   res.send({
  //     user: "ankit",
  //     id: req.params.id,
  //     message: "id is already in",
  //   });
  //   const id = req.params.id;
  //   if (id == 34) {
  //     res.send({
  //       status: 200,
  //       message: "user is valid",
  //     });
  //   } else {
  //     res.send({ status: 202, message: "user is invalid" });
  //   }
  res.sendStatus(204);
});

const Port = process.env.PORT || 8000;
app.listen(Port, () => {
  console.log(`listening on ${Port}`);
});
