const router = require("express").Router();



router.get("/", (req, res) => {
    res.render("dashboard-uploadButton");
});

module.exports = router;