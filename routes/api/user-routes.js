const router = require("express").Router();
const { User } = require("../../models");

// Create new user
router.post("/", async (req, res) => {
  try {
    const userInfo = await User.create(req.body);

    // Saving user into a session
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userInfo.id;
      req.session.username = userInfo.username;

      res.json(userInfo);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
