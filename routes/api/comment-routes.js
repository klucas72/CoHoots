const router = require("express").Router();
const { Comment, User } = require('../../models');
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

router.get("/", async (req, res) => {
    console.log(req.body);
    try {
        const commentData = await Comment.findAll({
            where: {
                // user_id: req.session.userId,
                design_id: req.body,
            },
        });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.json(comments);
        // res.json(designs);
    } catch (err) {
        res.status(500);
    }
});
// router.get('/:id', async (req, res) => {
//     try {
//         const allComments = await Comment.findAll({
//             include: [User],
//             where: {
//                 design_id: req.body.design_id
//             }
//         })
//         // const comments = postComments.map((Comment) => Comment.get({ plain: true }));

//         res.render('dashboard-withComments')
//     } catch (err) {
//         res.status(404).end();
//     }
// })

// router.get("/:id", (req, res) => {
//     console.log(req.body);
//     Comment.findAll({
//         where: {
//             design_id: req.params.design_id,
//         },
//     }).then((design) => {
//         res.json(design);
//         // res.render('');
//     })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
// });
module.exports = router;