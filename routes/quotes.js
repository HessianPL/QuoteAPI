const express = require('express');

const { quotes } = require('../data');
const { getRandomElement } = require('../utils');

const quotesRouter = express.Router();

quotesRouter.get('/random', (req, res) => {
    const randomQuote = getRandomElement(quotes);
    res.send(randomQuote);
});

quotesRouter.get('/', (req, res) => {
    console.log(req.query);
    if (!req.query.person) {
        res.send({quotes: quotes});
    } else {
        res.send({quotes: quotes.filter(el => el.person === req.query.person)});
    }
    
});

quotesRouter.post('/', (req, res) => {
    //handle post requests
});

module.exports = {
    quotesRouter,
}