const router = require("express").Router();
const { Design, User } = require('../../models');
const ensureAuthenticated = require('../../utils/auth');



// Create a new design
// Once upload design form is completed, we will need to add the ensureAuthenticated and get user_id from the Sessions object
router.post("/new", async (req, res) => {
  console.log(req.body);
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
// router.get('/', async (req, res) => {
//   try {
//     const designData = await Design.findAll();

//     const designs = designData.map((design) => design.get({ plain: true }));
//     res.json(designs);
//     // res.render('', { designs });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


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

router.delete('/:id', ensureAuthenticated, async (req, res) => {
  try {
    const [affectedRows] = Design.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;


router.post('/', ensureAuthenticated, async (req, res) => {
  const body = req.body
  console.log(body);
  try {
    const newDesign = await Design.create({
      ...body, userID: req.session.userID,
      image_url: imageUrl,
      user_id: userID,
      price: price
    })
    console.log(newDesign);
    res.json(newDesign)
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});