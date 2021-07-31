const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    res.send('route page')
  })

module.exports = router;