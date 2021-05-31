const router = require("express").Router();

const userRoutes = require("./user-routes");
const likeRoutes = require("./like-routes");
const designRoutes = require("./design-routes");
const commentRoutes = require("./comment-routes");
const uploadRoutes = require("./upload");

router.use("/users", userRoutes);
router.use("/likes", likeRoutes);
router.use("/designs", designRoutes); // /api/designs
router.use("/comments", commentRoutes);
router.use("/upload", uploadRoutes);

module.exports = router;
