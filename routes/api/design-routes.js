const router = require("express").Router();
const { Design, User } = require("../../models");
const ensureAuthenticated = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    const newDesign = await Design.create({
      ...req.body,
      image_url: req.body.image_url,
    //   userId: req.session.userId,
      price: req.body.price,
    });
    res.json(newDesign);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
