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

// Login
router.post("/login", async (req, res) => {
  try {
    const userInfo = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!userInfo) {
      res
        .status(400)
        .json({ message: "Incorrect username or password. Please try again!" });
      return;
    }

    // Checks if the password matches the bcrypted password in User model
    const validPassword = await userInfo.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = userInfo.id;
      req.session.username = userInfo.username;

      res
        .status(200)
        .json({ user: userInfo, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout
router.get("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
