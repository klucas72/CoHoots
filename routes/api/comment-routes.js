const router = require("express").Router();
const { Comment, Design, User } = require("../../models");
const ensureAuthenticated = require("../../utils/auth");


// Route to create a comment
router.post('/', ensureAuthenticated, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            body: req.body.body,
            designId: req.body.designId,
            userId: req.session.userId
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



module.exports = router;