
// run   npx nodemon server.js    if nodemon server.js doesn't work


// add path to make css availabe to the client
const path = require('path');
const express = require('express');
const routes = require('./controllers');

const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;

//import helpers.js first and then pass it to expbs.create()
const helpers = require('./utils/helpers');

// add handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers });


//set up Express.js session
const session = require('express-session');
//connect the session to Sequelize database
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess ={
    secret: 'it is not a secret',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 //equals one day
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));





// add Handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// serve public files as static assets
app.use(express.static(path.join(__dirname, 'public')));



//turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log
    (`  \n---------------------\n Now listening on ${PORT} \n---------------------`));
});