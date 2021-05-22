const router = require("express").Router();



router.get("/", (req, res) => {
    res.render("dashboard-submitUpload");
});

module.exports = router;