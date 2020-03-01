const express = require("express");
const hbs = require("hbs");
const app = express();
const router = express.Router();

app.set("view engine", hbs);

inaccessDate = () => {
  let requestAt = new Date();
  let dh = requestAt.getHours();
  console.log("dh", dh);
  if (dh > 17 && dh < 8) {
    console.log("not accessible");
  }
  next();
};
accessDate = () => {
  let requestAt = new Date();
  let dh = requestAt.getHours();
  console.log("dh", dh);
  if (dh < 17 && dh > 8) {
    console.log("accesible");
  }
  next();
};

router.get("/home", accessDate, (req, res) => {
  res.render("home.hbs");
});

app.get("/oureservices", inaccessDate, (req, res) => {
  res.render("oureservices.hbs");
});

app.get("/contact", (req, res) => {
  res.render("contact.hbs");
});

app.listen(3000, err => {
  if (err) console.log("server is not running");
  else console.log("server is running on port 3000");
});
