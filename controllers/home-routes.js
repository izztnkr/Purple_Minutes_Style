const router = require("express").Router();
const sequelize = require("../config/connection");
const { User } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
  }
  res.render("signup");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;
