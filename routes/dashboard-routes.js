const router = require("express").Router();
const ensureAuthenticated = require("../utils/auth");
const { Design, User } = require("../models");

// router.get("/", ensureAuthenticated, (req, res) => {
//   res.render("dashboard-uploadButton");
// });

// create a route to get all the designs for 1 user
router.get("/", ensureAuthenticated, async (req, res) => {
  try {
    const designData = await Design.findAll({
      where: {
        user_id: req.session.userId,
        // user_id: 4,
      },
    });
    const designs = designData.map((design) => {
      const item = design.get({ plain: true });
      return { ...item, cardId: "design-card-" + item.id };
    });

    //temporary fix for handlebars
    // const designsWithId = designs.map((design) => {
    //   return { ...design, cardId: "design-card-" + design.id };
    // });
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
