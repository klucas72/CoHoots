const router = require("express").Router();
const { Design, User, Like } = require("../models");

// Homepage route
// router.get("/", (req, res) => {
//   res.render("all-designs");
// });

// Homepage route
// get all posts for homepage
router.get("/", async (req, res) => {
  try {
    const designData = await Design.findAll({
      include: [User, Like],
    });

    const designs = designData.map((designs) => designs.get({ plain: true }));

    res.render("all-designs", { designs });
    // res.json(designs);
  } catch (err) {
    res.send(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

// Sign Up route
router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
