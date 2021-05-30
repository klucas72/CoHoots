const fs = require("fs");
const router = require("express").Router();
const { Design, User } = require("../../models");
const multer = require("multer");
const upload = multer({ dest: "upload", encoding: "base64" });
const ensureAuthenticated = require("../../utils/auth");

// Create a new design
// Once upload design form is completed, we will need to add the ensureAuthenticated and get user_id from the Sessions object
router.post(
  "/",
  upload.single("file"),
  ensureAuthenticated,
  async (req, res) => {
    const file = fs.readFileSync(`upload/${req.file.filename}`);
    const base64data = new Buffer(file, "binary").toString("base64");
    try {
      const newDesign = await Design.create({
        ...req.body,
        user_id: req.session.userId,
        name: req.file.filename,
        data: base64data,
        price: req.body.price,
      });
      res.redirect("../dashboard");
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

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
