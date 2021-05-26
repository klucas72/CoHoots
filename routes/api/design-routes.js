const router = require("express").Router();
const { Design, User } = require('../../models');
// const ensureAuthenticated = require('../../utils/auth');



// Create a new design
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







module.exports = router;