const router = require("express").Router();
const ensureAuthenticated = require("../utils/auth");
const { Design, User } = require('../models');

// router.get("/", ensureAuthenticated, (req, res) => {
//   res.render("dashboard-uploadButton");
// });

// create a route to get all the designs for 1 user
router.get('/', async (req, res) => {
  try {
    const designData = await Design.findAll({
      include: [User],
      where: {
        // userId: req.session.userId,
        user_id: 2,
      },
    });
  const designs = designData.map((design) => design.get({ plain: true }));
  res.render("dashboard-uploadButton", {designs})
  console.log(designs);
  // res.json(designs);
  } catch (err) {
    res.redirect('login')
  }
});

router.get("/upload", ensureAuthenticated, (req, res) => {
  res.render("dashboard-submitUpload");
});

module.exports = router;
