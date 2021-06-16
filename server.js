// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
const routes = require('./controllers');
const sequelize = require('./config/connection');


// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 2020;

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);


// Requiring our routes
app.use(routes);


// Syncing our database and logging a message to the user upon success
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
