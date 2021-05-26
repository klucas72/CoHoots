const router = require("express").Router();
const { Comment } = require('../../models');
const ensureAuthenticated = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            body: req.body.body,
            designId: req.body.designId,
            userId: req.body.userId,
            // user_id: req.session.user_id,
        });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;