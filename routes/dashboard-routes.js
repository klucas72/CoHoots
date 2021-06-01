const router = require("express").Router();
const ensureAuthenticated = require("../utils/auth");
const { Design, User, Like } = require("../models");

// create a route to get all the designs for 1 user
router.get("/", ensureAuthenticated, async (req, res) => {
  try {
    const designData = await Design.findAll({
      include: [User, Like],
      where: {
        user_id: req.session.userId,
      },
    });
    const designs = designData.map((design) => {
      const item = design.get({ plain: true });
      return { ...item, cardId: "design-card-" + item.id };
    });
    const currentUser = req.session.userId;
    const testDesigns = designs.map((design) => {
      const userLikes = design.likes
        .map((like) => like.userId)
        .includes(currentUser);
      design.liked = userLikes;
      return design;
    });

    res.render("all-user-designs", { designs });
    // res.json(designs);
  } catch (err) {
    res.redirect("login");
  }
});

router.get("/upload", ensureAuthenticated, (req, res) => {
  res.render("dashboard-submitUpload");
});

module.exports = router;
