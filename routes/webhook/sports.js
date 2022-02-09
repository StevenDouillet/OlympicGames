const express = require('express');
const router = express.Router();

router.post('/', async function (req, res, next) {
    const action = req.body.queryResult.action || 'unknown';

    switch (action) {
        case 'athletes-number':
            res.json({
                fulfillmentMessages: [
                    {
                        text: {
                            text: [
                                'There is 11k athletes for the current games'
                            ]
                        }
                    }
                ]
            });
            break;

        case 'sports-number':
            res.json({
                fulfillmentMessages: [
                    {
                        text: {
                            text: [
                                'There is 33 sports for the current games (with 5 new)'
                            ]
                        }
                    }
                ]
            });
            break;

        default:
            res.json({
                fulfillmentMessages: [
                    {
                        text: {
                            text: [
                                'Can you repeat that ?'
                            ]
                        }
                    }
                ]
            });
    }
});

module.exports = router;