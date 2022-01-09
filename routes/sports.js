var express = require('express');
const Sport = require("../models/sport");
var router = express.Router();

router.get('/', async function (req, res, next) {
    const sports = await Sport.find({}).sort({});
    res.render('sport-list', {sports});
});

router.get('/new', async function (req, res, next) {
    res.render('sport-create', {});
});

module.exports = router;
