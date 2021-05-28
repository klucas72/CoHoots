const router = require("express").Router();
const { Comment, Design, User } = require("../../models");
const ensureAuthenticated = require("../../utils/auth");


// Route to create a comment
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            body: req.body.body,
            design_id: req.body.designId,
            user_id: req.body.userId,
            // user_id: req.session.user_id,
        });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
})


// Route to get all comments based on a design
router.get("/:id", async (req, res) => {
    console.log(req.body);
    try {
        const commentData = await Comment.findAll({
            where: {
                // user_id: req.session.userId,
                design_id: req.params.id
            },
        });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.json(comments);
        // res.json(designs);
    } catch (err) {
        res.status(500);
    }
});




module.exports = router;