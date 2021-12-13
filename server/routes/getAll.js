const express = require('express');
const router = express.Router();

const { getAll, getTickers } = require('../services/getAll');

router.get('/tick', async (req, res, next) => {
  try {
    const data = await getTickers();

    res.json(data);
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const data = await getTickers();

    res.json(data);
  } catch (err) {
    console.error(`Error`, err.message);
    next(err);
  }
});



module.exports = router;
