const router = require("express").Router();
const { Comment, Design, User } = require("../../models");
const ensureAuthenticated = require("../../utils/auth");


// Route to create a comment
router.post('/', ensureAuthenticated, async (req, res) => {
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
router.get('/:id', async (req, res) => {
  try {
    const designData = await Design.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (designData) {
      const designs = designData.get({ plain: true });
      // res.json(designs);
      res.render('showComments', { designs });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});



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