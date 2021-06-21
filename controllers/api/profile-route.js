const router = require("express").Router();
const {User} = require("../../models");


// Save movie
router.post("/profile", async (req, res) => {
    console.log("POST /api/user/profile");
    try {
      const dbUserData = await User.create({
        movieTitle:req.body.title,
      });
      res.redirect(307, "/api/user/profile");
      // Or redirect to profile web page
      // res.redirect("/profile");
    } catch (err) {
      console.log(err.errors[0]);
      res.status(500).json({ messge: err.errors[0]["message"]});
    }
  });


router.get("/user_data", (req, res) => {
    console.log("GET /api/user/user_data");
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        name: req.user.name,
        email: req.user.email,
        id: req.user.id
      });
    }
  });

