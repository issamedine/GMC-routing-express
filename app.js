const express = require("express");
const hbs = require("hbs");
const app = express();

app.set("view engine", hbs);
app.use(express.static(__dirname + "/views"));

// inaccessDate = () => {
//   let requestAt = new Date();
//   let dh = requestAt.getHours();
//   console.log("dh", dh);
//   if (dh > 17 || dh < 8) {
//     res.redirect("/oureservices");
//   } else {
//     res.render("home.hbs");
//     }
// };

// accessDate = () => {
//   let requestAt = new Date();
//   let dh = requestAt.getHours();
//   console.log("dh", dh);
//   if (dh < 17 && dh > 8) {
//     console.log("accesible");
//   }
//   next();
// };

app.get("/home", function(req, res, next) {
  let requestAt = new Date();
  let dh = requestAt.getHours();
  console.log("dh", dh);
  if (dh > 17 || dh < 8) {
    res.sendFile(__dirname + "/views/oureservices.html");
  } else {
    // res.render("home.hbs");
    res.sendFile(__dirname + "/views/home.html");
  }
});

app.get("/oureservices", (req, res) => {
  res.render("oureservices.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/views/contact.html");
});

app.listen(3000, err => {
  if (err) console.log("server is not running");
  else console.log("server is running on port 3000");
});
