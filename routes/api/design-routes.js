const router = require("express").Router();
const { Design, User } = require('../../models');
// const ensureAuthenticated = require('../../utils/auth');



// Create a new design
// Once upload design form is completed, we will need to add the ensureAuthenticated and get user_id from the Sessions object
router.post("/new", async (req, res) => {
  try {
    const designInfo = await Design.create({
        image_url: req.body.image_url,
        user_id: req.body.user_id,
        price: req.body.price
    });
    res.json(designInfo)
  } catch (err) {
    res.status(400).json(err);
  }
});

// Create a route to GET ALL designs
router.get('/', async (req, res) => {
  try {
    const designData = await Design.findAll();

    const designs = designData.map((design) => design.get({ plain: true }));
    res.json(designs);
    // res.render('', { designs });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Create a route to get 1 Design by id
router.get('/find/:id', (req, res) => {
  Design.findAll({
    where: {
      id: req.params.id
    }
  }).then(design => {
  res.json(design);
  // res.render('');
  });
});






module.exports = router;