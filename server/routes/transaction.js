const express = require('express');
const { create } = require('../services/transaction');
const router = express.Router();

router.post('/', async function(req, res, next) {
  try {
    console.log('req.body', req.body);
    res.json(await create(req.body));
  } catch (err) {
    console.error(`Error while creating transaction`, err.message);
    next(err);
  }
});

module.exports = router;
