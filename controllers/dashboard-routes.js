
const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/", (req, res) => {
  res.render("dashboard");
});

// get all content for the dashboard
router.get("/dashboard/film", (req, res) => {
  Production.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "production_name",
      "production_type",
      "production_dates",
      "production_link",
      "production_description",
    ],
  })
    .then((dbProductionData) => {
      if (!dbProductionData) {
        res.status(404).json({ message: "No production found." });
        return;
      }

      const production = dbProductionData.get({ plain: true });

      res.render("dash_film.handlebars", {
        production,
        // loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/dashboard/music", (req, res) => {
  Production.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "production_name",
      "production_type",
      "production_dates",
      "production_link",
      "production_description",
    ],
  })
    .then((dbProductionData) => {
      if (!dbProductionData) {
        res.status(404).json({ message: "No production found." });
        return;
      }

      const production = dbProductionData.get({ plain: true });

      res.render("dash_music.handlebars", {
        production,
        // loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/dashboard/episodes", (req, res) => {
  Production.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "production_name",
      "production_type",
      "production_dates",
      "production_link",
      "production_description",
    ],
  })
    .then((dbProductionData) => {
      if (!dbProductionData) {
        res.status(404).json({ message: "No production found." });
        return;
      }

      const production = dbProductionData.get({ plain: true });

      res.render("episodes_music.handlebars", {
        production,
        // loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/dashboard/editorial", (req, res) => {
  Production.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "production_name",
      "production_type",
      "production_dates",
      "production_link",
      "production_description",
    ],
  })
    .then((dbProductionData) => {
      if (!dbProductionData) {
        res.status(404).json({ message: "No production found." });
        return;
      }

      const production = dbProductionData.get({ plain: true });

      res.render("dash_editorial.handlebars", {
        production,
        // loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;
