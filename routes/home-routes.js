const router = require("express").Router();

// Homepage route
router.get("/", (req, res) => {
    res.render("all-designs");
});

// Login route
router.get("/login", (req, res) => {
    res.render("login");
})

// Sign Up route
router.get("/signup", (req,res) => {
    res.render("signup");
})

module.exports = router;