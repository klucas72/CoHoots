const router = require("express").Router();
const { Like } = require("../../models");
const ensureAuthenticated = require("../../utils/auth");
const { Op } = require("sequelize");

router.post("/", ensureAuthenticated, async (req, res) => {
  try {
    const likeData = await Like.create({
      designId: req.body.designId,
      userId: req.session.userId,
    });

    res.json(likeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/", ensureAuthenticated, async (req, res) => {
  try {
    const likeData = await Like.destroy({
      where: {
        userId: req.session.userId,
        [Op.and]: { designId: req.body.designId },
      },
    });

    res.status(200).json(likeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
