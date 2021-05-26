const router = require("express").Router();
const ensureAuthenticated = require('../../utils/auth');
const { Design } = require('../../models');

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