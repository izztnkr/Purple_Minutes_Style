const sequelize = require("../config/connection");
const { Production } = require("../models");

const productiondata = [
  {
    id: 1,
    production_name: "LBJ for HBO",
    production_type: "Episodes",
    production_dates: "August 9, 2021",
    production_link: "TBD",
    production_description:
      "LBJ episode filmed in Austin for HBO series. Styling of cast by Purple Minutes.",
  },
  {
    id: 2,
    production_name: "You Need Me to Betray",
    production_type: "Music",
    production_dates: "April 5, 2021",
    production_link: "https://purple-minutes-styling.s3.us-east-2.amazonaws.com/Video/Copy+of+IMG_0153.mp4",
    production_description:
      "Music video by Curtis McMurtry for the song “You Need Me to Betray”. Styling, and sets props by Purple Minutes",
  },
  {
    id: 3,
    production_name: "Loose Ends",
    production_type: "Film",
    production_dates: "September 19, 2020",
    production_link: "TBD",
    production_description: "",
  },
  {
    id: 4,
    production_name: "Metallic Babe",
    production_type: "Editorial",
    production_dates: "March 13, 2021",
    production_link: "tbd",
    production_description:
      "Metallic Babe editorial shoot. Photographer was Cassie Carlson @cas_carlson.  Model was @Naturally_Cassie. Make-up by @makeupbymylan. Styling and clothing by Purple Minutes",
  },
];

const seedUsers = () =>
  Production.bulkCreate(productiondata, { individualHooks: true });

module.exports = seedUsers;
