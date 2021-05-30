const router = require("express").Router();
const { Design, User } = require("../../models");
const ensureAuthenticated = require("../../utils/auth");

// Create a new design
// Once upload design form is completed, we will need to add the ensureAuthenticated and get user_id from the Sessions object
router.post("/", async (req, res) => {
  try {
    const newDesign = await Design.create({
      ...req.body,
      image_url: req.body.image_url,
      user_id: req.session.userId,
      price: req.body.price,
    });
    res.json(newDesign);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a route to get 1 Design by id
router.get("/find/:id", (req, res) => {
  Design.findAll({
    where: {
      id: req.params.id,
    },
  }).then((design) => {
    res.json(design);
  });
});

router.delete("/:id", ensureAuthenticated, async (req, res) => {
  try {
    const designData = await Design.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.json(designData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
