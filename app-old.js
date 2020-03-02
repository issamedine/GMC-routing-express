const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("view engine", hbs);

const inaccessDate = () => {
  let requestAt = new Date();
  let dh = 20;
  console.log("dh", dh);
  if (dh > 17 || dh < 8) {
    res.redirect("/oureservices");
  } else {
    res.render("home.hbs");
  }
};

// accessDate = () => {
//   let requestAt = new Date();
//   let dh = requestAt.getHours();
//   console.log("dh", dh);
//   if (dh < 17 && dh > 8) {
//     console.log("accesible");
//   }
//   next();
// };

app.get("/home", inaccessDate());

app.get("/oureservices", (req, res) => {
  res.render("oureservices.hbs");
});

app.get("/contact", (req, res) => {
  res.render("contact.hbs");
});

app.listen(3000, err => {
  if (err) console.log("server is not running");
  else console.log("server is running on port 3000");
});
