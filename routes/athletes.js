const express = require('express');
const router = express.Router();
const Athlete = require('../models/athlete');


router.get('/', async function (req, res, next) {
    const athletes = await Athlete.find({}).sort({createdAt: -1});
    res.render('athlete-list', { athletes });
});

router.get('/new', async function (req, res, next) {
    res.render('athlete-create', {});
});

module.exports = router;
