const express = require('express');
const router = express.Router();

router.post('/', async function (req, res, next) {
    const action = req.body.queryResult.action || 'unknown';

    switch (action) {
        case 'sports':
            res.json({
                fulfillmentMessages: [
                    {
                        text: {
                            text: [
                                'Tu as choisi de voir les sports 🏀'
                            ]
                        }
                    }
                ]
            });
            break;

        case 'athletes':
            res.json({
                fulfillmentMessages: [
                    {
                        text: {
                            text: [
                                'Tu as choisi de voir les athlètes 🏋🏻‍♀️'
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
                                'Je ne suis pas sûr d\'avoir la réponse...'
                            ]
                        }
                    }
                ]
            });
    }
});

module.exports = router;