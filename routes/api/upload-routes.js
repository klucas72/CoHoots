const fs = require("fs");
const router = require("express").Router();
const { Design, User } = require("../../models");
const multer = require("multer");
const upload = multer({ dest: "upload", encoding: "base64" });
const ensureAuthenticated = require("../../utils/auth");

//post new image
router.post(
  "/",
  upload.single("file"),
  ensureAuthenticated,
  async (req, res) => {
    const file = fs.readFileSync(`upload/${req.file.filename}`);
    const base64data = new Buffer(file, "binary").toString("base64");
    try {
      const response = await Design.create({
        user_id: req.session.userId,
        name: req.file.filename,
        data: base64data,
      });

      res.redirect("../dashboard");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
);

module.exports = router;
