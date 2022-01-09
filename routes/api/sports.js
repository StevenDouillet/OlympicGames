const express = require('express');
const router = express.Router();
const Sport = require('../../models/sport');
const mongoose = require("mongoose");
const Athlete = require("../../models/athlete");

/*
* @GET method
* @Return all sports
*/
router.get('/', async function (req, res, next) {
    const sports = await Sport.find({}).sort({});
    res.json({ sports });
});

/*
* @GET method
* @Param sportId of the sport
* @Return sport
*/
router.get('/:id', async function (req, res) {
    const sport = await Sport.findById(req.params.id);
    res.json({ sport });
});

/*
* @POST method
* @Param new sport data in request body
* @Redirect sports view
*/
router.post('/', async (req, res) => {
    const param = req.body;
    const sport = new Sport({
        _id: mongoose.Types.ObjectId(),
        name: param.name
    });
    await sport.save();
    res.redirect('/sports');
});

/*
* @POST method
* @Param sportId of the sport
* @Redirect sports view
*/
router.post('/delete/:id', async function (req, res, next) {
    Sport.findOneAndDelete({ _id: (req.params.id) }, function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
    });
    res.redirect('/sports');
});

/*
* @GET method
* @Param sportId of the sport
* @Return all athletes in this sport
*/
router.get('/:id/athletes', async function (req, res) {
    const sport = await Sport.findById(req.params.id);
    const athlete = await Athlete.find({_id: sport._id});
    res.json({ athlete });
});

module.exports = router;