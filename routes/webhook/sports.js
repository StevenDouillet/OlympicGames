const express = require('express');
const router = express.Router();

router.post('/', async function (req, res, next) {
    const action = request.body.queryResult.action || 'unknown';

    switch (action) {
        case 'sports':
            response.json({
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
            response.json({
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
            response.json({
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