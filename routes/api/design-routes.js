const router = require("express").Router();
const { Design, User } = require('../../models');
// const ensureAuthenticated = require('../../utils/auth');

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

// router.post('/', async (req, res) => {
//     try {
//       console.log(req.body);
//       const newDesign = await Design.create({
//         image_url: req.body.image_url,
//         user_id: req.body.user_id,
//         price: req.body.price
//         // user_id: req.session.userId,
//       });
  
//       res.status(200).json(newDesign);
//       res.send('GOT THE DESIGN DATA!');
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });


// Create a route to GET ALL designs
// router.get('/', async (req, res) => {
//     try {
//       const designData = await Design.findAll();
  
//       const designs = designData.map((design) => design.get({ plain: true }));
  
//       res.render('', { posts });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });




// Create a route to get 1 Design by id







module.exports = router;