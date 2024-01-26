const express = require('express');

const router = express.Router();

app.get('/', (req, res) => {
    res.status(201).json({message: 'Connected to Backend!'});
})

module.exports = router;