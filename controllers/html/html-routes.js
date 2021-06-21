const router = require('express').Router();
const path = require("path");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// GET all galleries for homepage
router.get("/", (req, res) => {
  console.log("GET /");
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/home");
  }
  res.sendFile(path.join(__dirname, "../../public/signup.html"));
});

router.get("/login", (req, res) => {
  console.log("GET /login");
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/home");
  }
  res.sendFile(path.join(__dirname, "../../public/login.html"));
});


// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/home", isAuthenticated, (req, res) => {
  console.log("GET /home");
  // console.trace();
  res.sendFile(path.join(__dirname, "../../public/home.html"));
});








// trying route to save movie
router.get("/profile", (req, res) => {
  console.log("GET /profile");
  // send to profile page 
  if (req.user) {
    res.redirect("/profile");
  }
  res.sendFile(path.join(__dirname, "../../public/profile.html"));
});


// redirect from home to profile page
router.get("/profile", (req, res) => {
  console.log("GET /profile");
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/profile");
  }
  res.sendFile(path.join(__dirname, "../../public/home.html"));
});








module.exports = router;
