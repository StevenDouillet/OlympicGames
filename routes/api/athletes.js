const express = require('express');
const router = express.Router();
const Athlete = require('../../models/athlete');
const mongoose = require('mongoose');
const Sport = require("../../models/sport");

/*
* @GET method
* @Return all athletes
*/
router.get('/', async function (req, res, next) {
    const athletes = await Athlete.find({}).sort({createdAt: -1});
    res.json({ athletes });
});

/*
* @GET method
* @Param athleteId of the athlete
* @Return athlete
*/
router.get('/:id', async function (req, res) {
    const athlete = await Athlete.findById(req.params.id);
    res.json({ athlete });
});

/*
* @POST method
* @Param athleteId of the athlete
* @Redirect athletes view
*/
router.post('/delete/:id', async function (req, res, next) {
    Athlete.findOneAndDelete({ _id: (req.params.id) }, function (err) {
        if(err) console.log(err);
        console.log("Successful deletion");
    });
    res.redirect('/athletes');
});

/*
* @POST method
* @Param new athlete data in request body
* @Redirect athletes view
*/
router.post('/', async (req, res) => {
    const param = req.body;
    const athlete = new Athlete({
        _id: mongoose.Types.ObjectId(),
        firstName: param.firstname,
        lastName: param.name,
        gender: param.name,
        country: "france",
        createdDate: new Date()
    });
    await athlete.save();
    res.redirect('/athletes');
});

/*
* @GET method
* @Param athleteId of the athlete
* @Return all sports that do an athlete
*/
router.get('/:id/sports', async function (req, res) {
    const athlete = await Athlete.findById(req.params.id);
    const sport = await Sport.find({_id: athlete._id});
    res.json({ sport });
});

module.exports = router;
