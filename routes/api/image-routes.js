const fs = require("fs");
const router = require("express").Router();
const { Image } = require("../../models");
const multer = require("multer");

//get an image
router.get("/:id", async (req, res) => {
  try {
    const imageData = await Image.findByPk(req.params.id);
    // const picture = fs.readFileSync(imageData.data);
    console.log(imageData.data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
