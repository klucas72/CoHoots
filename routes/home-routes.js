const router = require("express").Router();
const { Design, User, Like } = require("../models");

router.get("/", async (req, res) => {
  try {
    const designData = await Design.findAll({
      include: [User, Like],
    });

    const designs = designData.map((designs) => designs.get({ plain: true }));
    const currentUser = req.session.userId;
    const testDesigns = designs.map((design) => {
      const userLikes = design.likes
        .map((like) => like.userId)
        .includes(currentUser);
      design.liked = userLikes;
      return design;
    });
    res.render("all-designs", { designs });
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
