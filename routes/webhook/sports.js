const express = require('express');
const router = express.Router();

router.post('/', async function (req, res, next) {
    res.json({
        fulfillmentMessages: [
            {
                text: {
                    text: [
                        'Im here, test'
                    ]
                }
            }
        ]
    });
});

module.exports = router;