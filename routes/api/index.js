const router = require("express").Router();

const userRoutes = require("./user-routes");
const likeRoutes = require("./like-routes");
const designRoutes = require("./design-routes");
const commentRoutes = require("./comment-routes");
const imageRoutes = require("./image-routes");

router.use("/users", userRoutes);
router.use("/likes", likeRoutes);
router.use("/designs", designRoutes); // /api/designs
router.use("/comments", commentRoutes);
router.use("/images", imageRoutes);

module.exports = router;
