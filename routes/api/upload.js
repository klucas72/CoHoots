const fs = require("fs");
const router = require("express").Router();
const { Image } = require("../../models");
const multer = require("multer");
const upload = multer({ dest: "upload" });

//post new image
router.post("/", upload.single("file"), async (req, res) => {
  const file = fs.readFileSync(`upload/${req.file.filename}`);
  try {
    const response = await Image.create({
      name: req.file.filename,
      data: file,
    });

    res.status(200).json({ message: "Image saved" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
