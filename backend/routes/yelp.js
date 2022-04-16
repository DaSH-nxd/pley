const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

//hide the auth api key
require('dotenv').config();

/**
 * @method - GET
 * @param - /yelp/:location
 * @description - Get yelp data from yelpapi by location
 */
router.get('/:location/', async (req, res) => {
    try {
        const location = req.params.location;
        const api_url = `https://api.yelp.com/v3/businesses/search?term=delis&location=${location}`;
        token = process.env.API_KEY;
        const fetch_res = await fetch(api_url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }});
        const json = await fetch_res.json();
        res.json(json);
    } catch (e) {
        res.send({ message : "Couldn't find this business" });
    }
}
);


module.exports = router;