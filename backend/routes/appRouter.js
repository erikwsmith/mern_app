const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(201).json({message: 'Connected to Backend!'});
})

module.exports = router;