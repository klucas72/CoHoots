const router = require("express").Router();
const ensureAuthenticated = require("../utils/auth");

router.get("/", ensureAuthenticated, (req, res) => {
  res.render("dashboard-uploadButton");
});

router.get("/upload", ensureAuthenticated, (req, res) => {
  res.render("dashboard-submitUpload");
});

module.exports = router;
