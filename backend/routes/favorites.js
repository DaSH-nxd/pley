const express = require('express');
const router = express.Router();

const User = require('../models/User');
const auth = require('../middleware/auth');

/**
 * @method - GET
 * @param - /favorites/list
 * @description - retrieve the current user's favorites
 */

router.get('/list', auth, async (req, res) => {
    try {
        // req.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        res.send({
            "favorites":
                user.favorites
        });
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
});

/**
 * @method - POST
 * @param - /favorites/add
 * @description - add a new item to the current user's favorites
 */
router.post('/add', auth, async (req, res) => {
    try {
        // console.log("sendin back0");
        const user = await User.findById(req.user.id);
        // console.log("sendin back1");
        // const favorite_data = JSON.stringify(req.body.place);
        user.favorites.push(req.body.place);
        await user.save();
        res.send({
            "favorites":
                user.favorites
        });
        // console.log("sendin back2");
    } catch (e) {
      res.send(e);
    }
});

/**
 * @method - DELETE
 * @param - /favorites/delete
 * @description - delete an item from the current user's favorites
 */

router.delete('/delete', auth, async (req, res) => {
    try {
        // req.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        user.favorites.pull(req.body.data);
        await user.save();
        res.send({
            "favorites":
                user.favorites
        });
    } catch (e) {
      res.send({ message: 'Error in Fetching user' });
    }
});

/**
 * @method - DELETE
 * @param - /favorites/deleteall
 * @description - delete all of the user's favorites
 */
router.delete('/deleteall', auth, async (req, res) => {
    try {
        // req.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        user.favorites.splice(0, user.favorites.length);
        await user.save();
        res.send(user.favorites);
    } catch (e) {
      res.send({ message: e });
    }
});


module.exports = router;